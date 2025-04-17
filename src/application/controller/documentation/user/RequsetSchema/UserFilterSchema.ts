import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseFilterSchema } from '../../common/BaseFilterSchema';
import { UserRole } from '@src/core/common/type/UserEnum';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export class UserFilterSchama extends BaseFilterSchema {
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({
    enum: UserRole,
    enumName: 'UserRole',
  })
  @IsEnum(UserRole, { message: 'Valid User Role value is required' })
  @IsOptional()
  role?: UserRole;
}
