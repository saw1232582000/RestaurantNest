// src/bill/bill.controller.ts
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
import { BillResponseDto } from '@src/core/domain/bill/dto/BillResponseDto';
import {
  CreateBillUseCase,
  GetBillUseCase,
  UpdateBillUseCase,
} from '@src/core/domain/bill/port/service-port/IBillUseCase';
import { JwtGuard } from '../auth/guard/jwt.guard';
import {
  CreateBillDto,
  UpdateBillDto,
} from '@src/core/domain/bill/dto/BillRequestDto';

class BillResponseSchema extends CoreApiResponseSchema<BillResponseDto> {
  @ApiProperty({ type: BillResponseDto })
  data: BillResponseDto;
}

@ApiTags('bill')
@Controller('bill')
export class BillController {
  constructor(
    private readonly createBillUseCase: CreateBillUseCase,
    private readonly updateBillUseCase: UpdateBillUseCase,
    private readonly getBillUseCase: GetBillUseCase,
  ) {}

  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @Post('/create')
  @ApiBody({ type: CreateBillDto })
  @ApiResponse({ status: 201, type: BillResponseSchema })
  async create(
    @Body() dto: CreateBillDto,
  ): Promise<CoreApiResponseSchema<BillResponseDto>> {
    const result = await this.createBillUseCase.execute(dto);
    return CoreApiResponseSchema.success(result);
  }

  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @Put('/update')
  @ApiBody({ type: UpdateBillDto })
  @ApiResponse({ status: 200, type: BillResponseSchema })
  async update(
    @Body() dto: UpdateBillDto,
  ): Promise<CoreApiResponseSchema<BillResponseDto>> {
    const result = await this.updateBillUseCase.execute(dto);
    return CoreApiResponseSchema.success(result);
  }

  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @Get('/get')
  @ApiQuery({ name: 'id', type: String })
  @ApiResponse({ status: 200, type: BillResponseSchema })
  async get(
    @Query('id') id: string,
  ): Promise<CoreApiResponseSchema<BillResponseDto>> {
    const result = await this.getBillUseCase.execute(id);
    return CoreApiResponseSchema.success(result);
  }
}
