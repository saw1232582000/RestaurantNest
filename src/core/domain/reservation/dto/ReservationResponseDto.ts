// src/reservation/dto/reservation-response.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { ReservationEntity } from '../entity/Reservation';

@Exclude()
export class ReservationResponseDto {
  @ApiProperty({ example: 'cuid101' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'user123' })
  @Expose()
  userId: string;

  @ApiProperty({ example: 'John Doe' })
  @Expose()
  customerName: string;

  @ApiProperty({ example: '+1234567890' })
  @Expose()
  phone: string;

  @ApiProperty({ example: 'Table 5' })
  @Expose()
  table: string;

  @ApiProperty({ example: '2025-03-01T18:00:00.000Z' })
  @Expose()
  reservationTime: Date;

  @ApiProperty({ example: 'Pending' })
  @Expose()
  status: string;

  @ApiProperty({ example: '2025-03-01T00:00:00.000Z' })
  @Expose()
  createdDate: Date;

  @ApiProperty({ example: '2025-03-01T00:00:00.000Z' })
  @Expose()
  updatedDate: Date;

  static fromEntity(entity: ReservationEntity): ReservationResponseDto {
    return {
      id: entity.id,
      userId: entity.userId,
      customerName: entity.customerName,
      phone: entity.phone,
      table: entity.table,
      reservationTime: entity.reservationTime,
      status: entity.status,
      createdDate: entity.createdDate,
      updatedDate: entity.updatedDate,
    };
  }
}
