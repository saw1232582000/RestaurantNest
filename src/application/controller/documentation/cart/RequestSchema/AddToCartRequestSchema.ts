import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AddToCartRequestSchema {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  productId: string;
}
