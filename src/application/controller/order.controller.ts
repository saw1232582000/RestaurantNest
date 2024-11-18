import {
  Body,
  Controller,
  FileTypeValidator,
  Get,
  Inject,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  Query,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { CreateorderUseCase } from 'src/core/domain/order/service/CreateOrderUseCase';
import { GetOrderUseCase } from 'src/core/domain/order/service/GetOrderUseCase';
import { GetOrderListWithFilterUseCase } from 'src/core/domain/order/service/GetOrderListUseCase';
import { PrismaOrderRepository } from 'src/core/domain/order/repository/PrismaOrderRepository';
import { PrismaClient } from '@prisma/client';
import { CreateOrderDto } from 'src/core/domain/order/dto/CreateOrderDto';
import { CoreApiResonseSchema } from 'src/core/common/schema/ApiResponseSchema';
import { CreateOrderRequestSchema } from './documentation/order/RequestSchema/CreateOrderRequestSchema';
import { OrderItemEntity } from 'src/core/domain/order/entity/OrderItem';
import { BaseRequestQuerySchema } from './documentation/common/BaseRequestQuerySchema';
import { OrderFilterSchama } from './documentation/order/RequestSchema/OrderFilterSchema';
import { OrderFilter } from 'src/core/domain/order/dto/OrderFilter';
import { GetOrderResponseSchema } from './documentation/order/ResponseSchema/GetOrderResponseSchema';
import { GetOrderListResponseSchema } from './documentation/order/ResponseSchema/GetOrderListResponseSchema';
import { CreateOrderResponseSchema } from './documentation/order/ResponseSchema/CreateOrderResponseSchema';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('Order')
@ApiTags('order')
export class OrderController {
  constructor(
    @Inject()
    private createOrderUseCase: CreateorderUseCase,
    private getOrderUseCase: GetOrderUseCase,
    private getOrderListUseCase: GetOrderListWithFilterUseCase,
  ) {}

  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  //   @ApiBody({ type: CreateorderSchema })
  @ApiResponse({ type: CreateOrderResponseSchema })
  @Post('/create')
  public async createOrder(
    @Body() order: CreateOrderRequestSchema,
    @Req() req,
  ) {
    this.createOrderUseCase = new CreateorderUseCase(
      new PrismaOrderRepository(new PrismaClient()),
    );
    const createOrderDto = new CreateOrderDto();
    createOrderDto.table = order?.table;

    createOrderDto.status = order.status;
    createOrderDto.userId = req.user?.user?.id;
    createOrderDto.orderItems = order.orderItems.map((orderItem) => {
      return OrderItemEntity.toEntity(orderItem);
    });

    await this.createOrderUseCase.execute(createOrderDto);
    return CoreApiResonseSchema.success({
      message: 'Order Created Successfully',
    });
  }

  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  //   @ApiBody({ type: CreateorderSchema })
  @ApiQuery({ type: BaseRequestQuerySchema })
  @ApiResponse({ type: GetOrderResponseSchema })
  @Get('/get')
  public async getOrder(@Req() req, @Query() params: { id: string }) {
    this.getOrderUseCase = new GetOrderUseCase(
      new PrismaOrderRepository(new PrismaClient()),
    );
    const order = await this.getOrderUseCase.execute(params.id);
    return CoreApiResonseSchema.success(order);
  }

  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  // @ApiBody({ type: OrderFilterSchama })
  @ApiResponse({ type: GetOrderListResponseSchema })
  @Get('/getList')
  public async getOrderList(@Query() params: OrderFilterSchama, @Req() req) {
    this.getOrderListUseCase = new GetOrderListWithFilterUseCase(
      new PrismaOrderRepository(new PrismaClient()),
    );
    const orderFilter = new OrderFilter(
      params.date,
      parseInt(params?.take.toString()),
      parseInt(params?.skip.toString()),
    );

    const orderList = await this.getOrderListUseCase.execute(orderFilter);
    return CoreApiResonseSchema.success(orderList);
  }

  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @Post('/upload')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  public async Upload(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 5 * 1024 * 1024 }),//max size 5MB
          new FileTypeValidator({ fileType: /\/(jpg|jpeg|png|gif|bmp|webp)$/ }),
        ],
      }),
    )
    file // eslint-disable-next-line no-undef
    : Express.Multer.File,
  ) {
    console.log(file);
  }
}
