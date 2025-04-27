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
  ValidationPipe,
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
import { CoreApiResponseSchema } from 'src/core/common/schema/ApiResponseSchema';
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
  @ApiBody({ type: CreateOrderRequestSchema })
  @ApiResponse({ type: CreateOrderResponseSchema })
  @Post('/create')
  public async createOrder(
    @Body(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    )
    order: CreateOrderRequestSchema,
    @Req() req,
  ) {
    try {
      const createOrderDto = new CreateOrderDto();
      createOrderDto.table = order.table;
      createOrderDto.status = order.status || 'PROCESSING';
      createOrderDto.userId = req.user?.user?.id;
      createOrderDto.orderItems = order.orderItems.map((orderItem) => {
        return OrderItemEntity.toEntity(orderItem);
      });

      const result = await this.createOrderUseCase.execute(createOrderDto);
      return CoreApiResponseSchema.success({
        message: 'Order Created Successfully',
        data: result,
      });
    } catch (error) {
      console.error('Create order error:', error);
      return CoreApiResponseSchema.error(error);
    }
  }

  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @ApiBody({ type: UpdateOrderStatusRequestSchema })
  @ApiQuery({ type: BaseRequestQuerySchema })
  @ApiResponse({ type: UpdateOrderStatusResponseSchema })
  @Put('/update')
  public async update(
    @Body(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    )
    order: UpdateOrderStatusRequestSchema,
    @Req() req,
    @Query(
      new ValidationPipe({
        transform: true,
      }),
    )
    params: BaseRequestQuerySchema,
  ) {
    const updateOrderStatusDto = new UpdateOrderStatusDto();
    updateOrderStatusDto.id = params.id;
    updateOrderStatusDto.status = order.status;

    return CoreApiResponseSchema.success(
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
    @Body(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    )
    order: UpdateOrderItemRequestSchema,
    @Req() req,
    @Query(
      new ValidationPipe({
        transform: true,
      }),
    )
    params: BaseRequestQuerySchema,
  ) {
    try {
      const updateOrderDto = new UpdateOrderItemDto();
      updateOrderDto.table = order.table;
      updateOrderDto.Id = params.id;
      updateOrderDto.status = '';

      updateOrderDto.orderItems = order.orderItems.map((orderItem) => {
        return OrderItemEntity.toEntity(orderItem);
      });

      await this.updateOrderItemUseCase.execute(updateOrderDto);
      return CoreApiResponseSchema.success({
        message: 'Order updated Successfully',
      });
    } catch (error) {
      console.error('Update order item error:', error);
      return CoreApiResponseSchema.error(500, 'Order Item Update Error', error);
    }
  }

  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @ApiQuery({ type: BaseRequestQuerySchema })
  @ApiResponse({ type: GetOrderResponseSchema })
  @Get('/get')
  public async getOrder(
    @Req() req,
    @Query(
      new ValidationPipe({
        transform: true,
      }),
    )
    params: BaseRequestQuerySchema,
  ) {
    const order = await this.getOrderUseCase.execute(params.id);
    return CoreApiResponseSchema.success(order);
  }

  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @ApiResponse({ type: GetOrderListResponseSchema })
  @Get('/getList')
  public async getOrderList(
    @Query(
      new ValidationPipe({
        transform: true,
      }),
    )
    params: OrderFilterSchama,
    @Req() req,
  ) {
    let filterStartDate: Date | undefined = undefined;
    let filterEndDate: Date | undefined = undefined;

    // Helper function to parse date strings
    const parseDate = (dateString: string): Date | undefined => {
      if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
        const date = new Date(dateString);
        date.setHours(0, 0, 0, 0); // Set to start of the day
        return date;
      } else {
        console.warn(
          `Invalid date format received: ${dateString}. Expected YYYY-MM-DD. Ignoring.`,
        );
        return undefined;
      }
    };

    if (params.startDate) {
      filterStartDate = parseDate(params.startDate);
    }
    if (params.endDate) {
      filterEndDate = parseDate(params.endDate);
    }

    // Defaulting logic
    if (!filterStartDate && !filterEndDate) {
      // Neither provided: return all dates (no date filter applied)
      // Previously was defaulting to current day, now we'll leave both undefined
      filterStartDate = undefined;
      filterEndDate = undefined;
    } else if (filterStartDate && !filterEndDate) {
      // Only start date provided: default end date to end of start date
      filterEndDate = new Date(filterStartDate);
      filterEndDate.setHours(23, 59, 59, 999);
    } else if (!filterStartDate && filterEndDate) {
      // Only end date provided: default start date to start of end date
      filterStartDate = new Date(filterEndDate);
      filterStartDate.setHours(0, 0, 0, 0); // Ensure start is at the beginning of the day
      // Adjust end date to ensure it's the end of the day
      filterEndDate.setHours(23, 59, 59, 999);
    } else if (filterStartDate && filterEndDate) {
      // Both provided: ensure endDate is end of day
      filterEndDate.setHours(23, 59, 59, 999);
      // Optional: Check if startDate is after endDate and handle (e.g., swap or throw error)
      if (filterStartDate > filterEndDate) {
        // Option 1: Swap them
        // [filterStartDate, filterEndDate] = [filterEndDate, filterStartDate];
        // filterStartDate.setHours(0, 0, 0, 0); // Reset times after potential swap
        // filterEndDate.setHours(23, 59, 59, 999);
        // Option 2: Throw error (example)
        // throw new BadRequestException('Start date cannot be after end date');
        console.warn(
          'Start date is after end date. Filtering might yield no results.',
        );
      }
    }

    const orderFilter = new OrderFilter(
      filterStartDate, // Pass Date object or undefined
      filterEndDate, // Pass Date object or undefined
      params.take ? parseInt(params.take.toString()) : 10,
      params.skip ? parseInt(params.skip.toString()) : 0,
      params.status,
    );

    const orderList = await this.getOrderListUseCase.execute(orderFilter);
    return CoreApiResponseSchema.success(orderList);
  }
}
