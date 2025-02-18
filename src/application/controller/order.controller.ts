import {
  Body,
  Controller,
  FileTypeValidator,
  Get,
  Inject,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  Put,
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
import { S3Service } from 'src/core/common/file-upload/UploadS3Service';
import { UpdateOrderStatusRequestSchema } from './documentation/order/RequestSchema/UpdateOrderStatusRequestSchema';
import { UpdateOrderStatusResponseSchema } from './documentation/order/ResponseSchema/UpdateOrderStatusResponseSchema';
import { UpdateOrderStatusDto } from '@src/core/domain/order/dto/UpdateOrderStatusDto';
import { UpdateOrderStatusUseCase } from '@src/core/domain/order/service/UpdateOrderStatusUseCase';
import { UpdateOrderItemRequestSchema } from './documentation/order/RequestSchema/UpdateOrderItemReqeustSchema';
import { UpdateOrderItemDto } from '@src/core/domain/order/dto/UpdateOrderItemDto';
import { UpdateOrderItemUseCase } from '@src/core/domain/order/service/UpdateOrderItemUseCase';
// import { ChatGateWay } from 'src/core/common/chat/ChatGateWay';

@Controller('Order')
@ApiTags('order')
export class OrderController {
  constructor(
    @Inject()
    private createOrderUseCase: CreateorderUseCase,
    private getOrderUseCase: GetOrderUseCase,
    private getOrderListUseCase: GetOrderListWithFilterUseCase,
    private updateOrderStatusUseCase: UpdateOrderStatusUseCase,
    private updateOrderItemUseCase: UpdateOrderItemUseCase,
    // private readonly chatGateWay: ChatGateWay,
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
    try {
      const createOrderDto = new CreateOrderDto();
      createOrderDto.table = order?.table;

      createOrderDto.status = order.status;
      createOrderDto.userId = req.user?.user?.id;
      createOrderDto.orderItems = order.orderItems.map((orderItem) => {
        return OrderItemEntity.toEntity(orderItem);
      });
      //this.chatGateWay.setNewOrder('New Order submitted');
      await this.createOrderUseCase.execute(createOrderDto);
      return CoreApiResonseSchema.success({
        message: 'Order Created Successfully',
      });
    } catch (error) {
      return CoreApiResonseSchema.error(error);
    }
  }

  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @ApiBody({ type: UpdateOrderStatusRequestSchema })
  @ApiQuery({ type: BaseRequestQuerySchema })
  @ApiResponse({ type: UpdateOrderStatusResponseSchema })
  @Put('/update')
  public async update(
    @Body() order: UpdateOrderStatusRequestSchema,
    @Req() req,
    @Query() params: { id: string },
  ) {
    // this.updateProductUsecase = new UpdateProductUseCase(
    //   new PrismaProductRepository(new PrismaClient()),
    // );
    const updateOrderStatusDto = new UpdateOrderStatusDto();
    updateOrderStatusDto.id = params.id;
    updateOrderStatusDto.status = order.status;

    return CoreApiResonseSchema.success(
      await this.updateOrderStatusUseCase.execute(updateOrderStatusDto),
    );
  }

  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @ApiBody({ type: UpdateOrderItemRequestSchema })
  @ApiResponse({ type: CreateOrderResponseSchema })
  @ApiQuery({ type: BaseRequestQuerySchema })
  @Put('/updateOrderItems')
  public async updateOrderItems(
    @Body() order: UpdateOrderItemRequestSchema,
    @Req() req,
    @Query() params: { id: string },
  ) {
    try {
      const updateOrderDto = new UpdateOrderItemDto();
      updateOrderDto.table = order?.table;
      updateOrderDto.Id = params.id;
      updateOrderDto.status = '';

      updateOrderDto.orderItems = order.orderItems.map((orderItem) => {
        return OrderItemEntity.toEntity(orderItem);
      });
      //this.chatGateWay.setNewOrder('New Order submitted');
      await this.updateOrderItemUseCase.execute(updateOrderDto);
      return CoreApiResonseSchema.success({
        message: 'Order updated Successfully',
      });
    } catch (error) {
      return CoreApiResonseSchema.error(500, 'Order Item Update Error', error);
    }
  }

  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  //   @ApiBody({ type: CreateorderSchema })
  @ApiQuery({ type: BaseRequestQuerySchema })
  @ApiResponse({ type: GetOrderResponseSchema })
  @Get('/get')
  public async getOrder(@Req() req, @Query() params: { id: string }) {
    const order = await this.getOrderUseCase.execute(params.id);
    return CoreApiResonseSchema.success(order);
  }

  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  // @ApiBody({ type: OrderFilterSchama })
  @ApiResponse({ type: GetOrderListResponseSchema })
  @Get('/getList')
  public async getOrderList(@Query() params: OrderFilterSchama, @Req() req) {
    // console.log(params);
    const orderFilter = new OrderFilter(
      params.startDate,
      params.endDate,
      parseInt(params?.take.toString()),
      parseInt(params?.skip.toString()),
      params.status,
    );

    const orderList = await this.getOrderListUseCase.execute(orderFilter);
    return CoreApiResonseSchema.success(orderList);
  }
}
