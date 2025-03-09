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
import {
  StockListResponseDto,
  StockResponseDto,
} from '@src/core/domain/stock/dto/StockResponseDto';
import {
  CreateStockUseCase,
  GetStockListUseCase,
  GetStockUseCase,
  UpdateStockUseCase,
} from '@src/core/domain/stock/port/service-port/IStockUseCase';
import { JwtGuard } from '../auth/guard/jwt.guard';
import {
  CreateStockDto,
  GetStockListDto,
  UpdateStockDto,
} from '@src/core/domain/stock/dto/StockRequestDto';

class StockResponseSchema extends CoreApiResponseSchema<StockResponseDto> {
  @ApiProperty({ type: StockResponseDto })
  data: StockResponseDto;
}

class StockListResponseSchema extends CoreApiResponseSchema<StockListResponseDto> {
  @ApiProperty({ type: StockListResponseDto })
  data: StockListResponseDto;
}

@ApiTags('stock')
@Controller('stock')
export class StockController {
  constructor(
    private readonly createStockUseCase: CreateStockUseCase,
    private readonly updateStockUseCase: UpdateStockUseCase,
    private readonly getStockUseCase: GetStockUseCase,
    private readonly getStockListUseCase: GetStockListUseCase,
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

  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @Get('/list')
  @ApiQuery({ name: 'ingredientName', type: String, required: false })
  @ApiQuery({ name: 'unit', type: String, required: false })
  @ApiQuery({ name: 'belowThreshold', type: Boolean, required: false })
  @ApiResponse({ status: 200, type: StockListResponseSchema })
  async getList(
    @Query('ingredientName') ingredientName?: string,
    @Query('unit') unit?: string,
    @Query('belowThreshold') belowThreshold?: string,
    @Query('take') take?: number,
    @Query('skip') skip?: number,
  ): Promise<CoreApiResponseSchema<StockListResponseDto>> {
    //console.log(ingredientName, unit, belowThreshold);
    // console.log(take, skip);
    const filter = new GetStockListDto();
    filter.ingredientName = ingredientName;
    filter.unit = unit;
    filter.belowThreshold = belowThreshold === 'true';
    filter.take = take;
    filter.skip = skip;
    const result = await this.getStockListUseCase.execute(filter);
    return CoreApiResponseSchema.success(result);
  }
}
