// src/reservation/dto/create-reservation.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateReservationDto {
  @ApiProperty({ description: 'Customer name', example: 'John Doe' })
  @IsString()
  @IsNotEmpty()
  customerName: string;

  @ApiProperty({ description: 'Phone number', example: '+1234567890' })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ description: 'Table identifier', example: 'Table 5' })
  @IsString()
  @IsNotEmpty()
  table: string;

  @ApiProperty({
    description: 'Reservation time',
    example: '2025-03-01T18:00:00.000Z',
  })
  @IsDateString()
  @IsNotEmpty()
  reservationTime: string;

  userId?: string; // Injected from auth

  constructor(data: Partial<CreateReservationDto>) {
    this.customerName = data.customerName || '';
    this.phone = data.phone || '';
    this.table = data.table || '';
    this.reservationTime = data.reservationTime || '';
    this.userId = data.userId;
  }
}

export class UpdateReservationDto {
  @ApiProperty({ description: 'Reservation ID', example: 'cuid101' })
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty({ description: 'Customer name', example: 'John Doe' })
  @IsString()
  @IsNotEmpty()
  customerName: string;

  @ApiProperty({ description: 'Phone number', example: '+1234567890' })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ description: 'Table identifier', example: 'Table 5' })
  @IsString()
  @IsNotEmpty()
  table: string;

  @ApiProperty({
    description: 'Reservation time',
    example: '2025-03-01T18:00:00.000Z',
  })
  @IsDateString()
  @IsNotEmpty()
  reservationTime: string;

  @ApiProperty({ description: 'Status', example: 'Confirmed' })
  @IsString()
  @IsNotEmpty()
  status: string;

  userId?: string; // Injected from auth

  constructor(data: Partial<UpdateReservationDto>) {
    this.id = data.id || '';
    this.customerName = data.customerName || '';
    this.phone = data.phone || '';
    this.table = data.table || '';
    this.reservationTime = data.reservationTime || '';
    this.status = data.status || 'Pending';
    this.userId = data.userId;
  }
}
