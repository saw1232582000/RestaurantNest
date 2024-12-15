import { Module } from '@nestjs/common';
import { OrderController } from '../controller/order.controller';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { IOrderRepository } from 'src/core/domain/order/port/repository-port/IOrderRepository';
import { PrismaOrderRepository } from 'src/core/domain/order/repository/PrismaOrderRepository';
import { GetOrderUseCase } from 'src/core/domain/order/service/GetOrderUseCase';
import { CreateorderUseCase } from 'src/core/domain/order/service/CreateOrderUseCase';
import { GetOrderListWithFilterUseCase } from 'src/core/domain/order/service/GetOrderListUseCase';
import { S3Service } from 'src/core/common/file-upload/UploadS3Service';
import { UpdateOrderStatusUseCase } from '@src/core/domain/order/service/UpdateOrderStatusUseCase';


@Module({
  controllers: [OrderController],
  providers: [
    JwtGuard,
    GetOrderUseCase,
    CreateorderUseCase,
    GetOrderListWithFilterUseCase,
    UpdateOrderStatusUseCase,
    {
      provide: IOrderRepository,
      useClass: PrismaOrderRepository,
    },
    
    // {
    //   provide:"CreateorderUseCase",
    //   useClass:CreateorderUseCase,useFactory: (orderRepository: PrismaOrderRepository, chatGateway: ChatGateWay) => {
    //     return new CreateorderUseCase(orderRepository);
    //   },
    //   inject: ['OrderRepository', ChatGateWay],
    // },
    // ChatGateWay,
    
    
  ],
})
export class OrderModule {}
