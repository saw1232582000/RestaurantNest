import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './application/module/users.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './application/module/auth.module';
import { ProductModule } from './application/module/product.module';
import { CartModule } from './application/module/cart.module';
import { OrderModule } from './application/module/order.module';
import { ChatModule } from './application/module/chat.module';
import { PrismaModule } from './application/module/prisma.module';
import { NotificationModule } from './application/module/notification.module';
import { DailyBuyingModule } from './application/module/daily-buying.module';
import { BillModule } from './application/module/bill.module';
import { VoucherModule } from './application/module/voucher.module';
import { ReservationModule } from './application/module/reservation.module';
import { StockModule } from './application/module/stock.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    ProductModule,
    CartModule,
    OrderModule,
    ChatModule,
    PrismaModule,
    NotificationModule,
    DailyBuyingModule,
    BillModule,
    VoucherModule,
    ReservationModule,
    StockModule,
    ThrottlerModule.forRoot([
      {
        name: 'short',
        ttl: 1000,
        limit: 3,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
