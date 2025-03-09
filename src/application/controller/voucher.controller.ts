// src/voucher/voucher.controller.ts
import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  Put,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiProperty,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CoreApiResponseSchema } from '@src/core/common/schema/ApiResponseSchema';
import { VoucherResponseDto } from '@src/core/domain/voucher/dto/VoucherResponseDto';
import {
  CreateVoucherUseCase,
  GetVoucherUseCase,
  UpdateVoucherUseCase,
} from '@src/core/domain/voucher/port/service-port/IVoucherUseCase';
import { JwtGuard } from '../auth/guard/jwt.guard';
import {
  CreateVoucherDto,
  UpdateVoucherDto,
} from '@src/core/domain/voucher/dto/VoucherRequestDto';

class VoucherResponseSchema extends CoreApiResponseSchema<VoucherResponseDto> {
  @ApiProperty({ type: VoucherResponseDto })
  data: VoucherResponseDto;
}

@ApiTags('voucher')
@Controller('voucher')
export class VoucherController {
  constructor(
    private readonly createVoucherUseCase: CreateVoucherUseCase,
    private readonly updateVoucherUseCase: UpdateVoucherUseCase,
    private readonly getVoucherUseCase: GetVoucherUseCase,
  ) {}

  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @Post('/create')
  @ApiBody({ type: CreateVoucherDto })
  @ApiResponse({ status: 201, type: VoucherResponseSchema })
  async create(
    @Body() dto: CreateVoucherDto,
  ): Promise<CoreApiResponseSchema<VoucherResponseDto>> {
    const result = await this.createVoucherUseCase.execute(dto);
    return CoreApiResponseSchema.success(result);
  }

  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @Put('/update')
  @ApiBody({ type: UpdateVoucherDto })
  @ApiResponse({ status: 200, type: VoucherResponseSchema })
  async update(
    @Body() dto: UpdateVoucherDto,
  ): Promise<CoreApiResponseSchema<VoucherResponseDto>> {
    const result = await this.updateVoucherUseCase.execute(dto);
    return CoreApiResponseSchema.success(result);
  }

  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @Get('/get')
  @ApiQuery({ name: 'id', type: String })
  @ApiResponse({ status: 200, type: VoucherResponseSchema })
  async get(
    @Query('id') id: string,
  ): Promise<CoreApiResponseSchema<VoucherResponseDto>> {
    const result = await this.getVoucherUseCase.execute(id);
    return CoreApiResponseSchema.success(result);
  }
}
