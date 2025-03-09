// src/reservation/reservation.controller.ts
import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  Put,
  UseGuards,
  Req,
  BadRequestException,
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
import { ReservationResponseDto } from '@src/core/domain/reservation/dto/ReservationResponseDto';
import {
  CreateReservationUseCase,
  GetReservationUseCase,
  UpdateReservationUseCase,
} from '@src/core/domain/reservation/port/service-port/IReservationUseCase';
import { JwtGuard } from '../auth/guard/jwt.guard';
import {
  CreateReservationDto,
  UpdateReservationDto,
} from '@src/core/domain/reservation/dto/ReservationRequestDto';

class ReservationResponseSchema extends CoreApiResponseSchema<ReservationResponseDto> {
  @ApiProperty({ type: ReservationResponseDto })
  data: ReservationResponseDto;
}

@ApiTags('reservation')
@Controller('reservation')
export class ReservationController {
  constructor(
    private readonly createReservationUseCase: CreateReservationUseCase,
    private readonly updateReservationUseCase: UpdateReservationUseCase,
    private readonly getReservationUseCase: GetReservationUseCase,
  ) {}

  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @Post('/create')
  @ApiBody({ type: CreateReservationDto })
  @ApiResponse({ status: 201, type: ReservationResponseSchema })
  async create(
    @Body() dto: CreateReservationDto,
    @Req() req,
  ): Promise<CoreApiResponseSchema<ReservationResponseDto>> {
    dto.userId = req.user?.user?.id || '';
    if (!dto.userId)
      throw new BadRequestException('User ID missing from token');
    const result = await this.createReservationUseCase.execute(dto);
    return CoreApiResponseSchema.success(result);
  }

  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @Put('/update')
  @ApiBody({ type: UpdateReservationDto })
  @ApiResponse({ status: 200, type: ReservationResponseSchema })
  async update(
    @Body() dto: UpdateReservationDto,
    @Req() req,
  ): Promise<CoreApiResponseSchema<ReservationResponseDto>> {
    dto.userId = req.user?.user?.id || '';
    if (!dto.userId)
      throw new BadRequestException('User ID missing from token');
    const result = await this.updateReservationUseCase.execute(dto);
    return CoreApiResponseSchema.success(result);
  }

  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @Get('/get')
  @ApiQuery({ name: 'id', type: String })
  @ApiResponse({ status: 200, type: ReservationResponseSchema })
  async get(
    @Query('id') id: string,
  ): Promise<CoreApiResponseSchema<ReservationResponseDto>> {
    const result = await this.getReservationUseCase.execute(id);
    return CoreApiResponseSchema.success(result);
  }
}
