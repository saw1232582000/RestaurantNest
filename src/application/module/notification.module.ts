import { Global, Module } from '@nestjs/common';
import { NotificationService } from '@src/core/common/pusher/NotificationService';

@Global()
@Module({
  providers: [NotificationService],
  exports: [NotificationService],
})
export class NotificationModule {}
