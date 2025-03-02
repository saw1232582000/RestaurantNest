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
import { StockResponseDto } from '@src/core/domain/stock/dto/StockResponseDto';
import {
  CreateStockUseCase,
  GetStockUseCase,
  UpdateStockUseCase,
} from '@src/core/domain/stock/port/service-port/IStockUseCase';
import { JwtGuard } from '../auth/guard/jwt.guard';
import {
  CreateStockDto,
  UpdateStockDto,
} from '@src/core/domain/stock/dto/StockRequestDto';

class StockResponseSchema extends CoreApiResponseSchema<StockResponseDto> {
  @ApiProperty({ type: StockResponseDto })
  data: StockResponseDto;
}

@ApiTags('stock')
@Controller('stock')
export class StockController {
  constructor(
    private readonly createStockUseCase: CreateStockUseCase,
    private readonly updateStockUseCase: UpdateStockUseCase,
    private readonly getStockUseCase: GetStockUseCase,
  ) {}

  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @Post('/create')
  @ApiBody({ type: CreateStockDto })
  @ApiResponse({ status: 201, type: StockResponseSchema })
  async create(
    @Body() dto: CreateStockDto,
  ): Promise<CoreApiResponseSchema<StockResponseDto>> {
    const result = await this.createStockUseCase.execute(dto);
    return CoreApiResponseSchema.success(result);
  }

  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @Put('/update')
  @ApiBody({ type: UpdateStockDto })
  @ApiResponse({ status: 200, type: StockResponseSchema })
  async update(
    @Body() dto: UpdateStockDto,
  ): Promise<CoreApiResponseSchema<StockResponseDto>> {
    const result = await this.updateStockUseCase.execute(dto);
    return CoreApiResponseSchema.success(result);
  }

  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @Get('/get')
  @ApiQuery({ name: 'id', type: String })
  @ApiResponse({ status: 200, type: StockResponseSchema })
  async get(
    @Query('id') id: string,
  ): Promise<CoreApiResponseSchema<StockResponseDto>> {
    const result = await this.getStockUseCase.execute(id);
    return CoreApiResponseSchema.success(result);
  }
}
