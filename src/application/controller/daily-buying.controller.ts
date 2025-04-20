import {
  Body,
  Controller,
  FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Post,
  Put,
  Query,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { JwtGuard } from '../auth/guard/jwt.guard';

import { PrismaClient } from '@prisma/client';
import { CoreApiResponseSchema } from 'src/core/common/schema/ApiResponseSchema';

import { FileInterceptor } from '@nestjs/platform-express';
import { S3Service } from 'src/core/common/file-upload/UploadS3Service';
import { CreateDailyBuyingUseCase } from '@src/core/domain/daily-buying/service/CreateDailyBuyingUseCase';
import { UpdateDailyBuyingUseCase } from '@src/core/domain/daily-buying/service/UpdateDailyBuyingUseCase';
import { GetDailyBuyingUseCase } from '@src/core/domain/daily-buying/service/GetDailyBuyingUseCase';
import {
  GetDailyBuyingListUseCase,
  GetDailyBuyingListWithFilterUseCase,
} from '@src/core/domain/daily-buying/service/GetDailyBuyingListUseCase';
import { UpdateDailyBuyingDto } from '@src/core/domain/daily-buying/dto/UpdateDailyBuyingDto';
import { DailyBuyingFilter } from '@src/core/domain/daily-buying/dto/DailyBuyingFilter';
import { CreateDailyBuyingSchema } from './documentation/daily-buying/RequestSchema/CreateDailyBuyingRequestSchema';
import { CreateDailyBuyingResponseSchema } from './documentation/daily-buying/ResponseSchema/CreateDailyBuyingResponseSchema';
import { CreateDailyBuyingDto } from '@src/core/domain/daily-buying/dto/CreateDailyBuyingDto';
import { BaseRequestQuerySchema } from './documentation/common/BaseRequestQuerySchema';
import { UpdateDailyBuyingResponseSchema } from './documentation/daily-buying/ResponseSchema/UpdateDailyBuyingResponseSchema';
import { GetDailyBuyingResponseSchema } from './documentation/daily-buying/ResponseSchema/GetDailyBuyingResponseSchema';
import { GetDailyBuyingListResponseSchema } from './documentation/daily-buying/ResponseSchema/GetDailyBuyingListResponseSchema';
import { DailyBuyingFilterSchama } from './documentation/daily-buying/RequestSchema/DailyBuyingFilterSchema';
import { CreateManyDailyBuyingSchema } from './documentation/daily-buying/RequestSchema/CreateManyDailyBuyingReqeustSchema';
import { ICreateManyDailyBuyingUseCase } from '@src/core/domain/daily-buying/port/service-port/ICreateManyDailyBuyingUseCase';
import { CreateManyDailyBuyingDto } from '@src/core/domain/daily-buying/dto/CreateManyDailyBuyingDto';

@Controller('DailyBuying')
@ApiTags('DailyBuying')
export class DailyBuyingController {
  constructor(
    private createDailyBuyingUseCase: CreateDailyBuyingUseCase,
    private updateDailyBuyingUsecase: UpdateDailyBuyingUseCase,
    private getDailyBuyingUsecase: GetDailyBuyingUseCase,
    private getDailyBuyingListUsecase: GetDailyBuyingListUseCase,
    private getDailyBuyingListWithFilter: GetDailyBuyingListWithFilterUseCase,
    private createManyDailyBuyingUseCase: ICreateManyDailyBuyingUseCase,
  ) {}

  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @ApiBody({ type: CreateDailyBuyingSchema })
  @ApiResponse({ type: CreateDailyBuyingResponseSchema })
  @Post('/create')
  public async create(
    @Body() dailyBuying: CreateDailyBuyingSchema,
    @Req() req,
  ) {
    // this.createDailyBuyingUseCase = new CreateDailyBuyingUseCase(
    //   new PrismaDailyBuyingRepository(new PrismaClient()),
    // );
    const createDailyBuyingDto = new CreateDailyBuyingDto();
    createDailyBuyingDto.particular = dailyBuying.particular;
    createDailyBuyingDto.unit = dailyBuying.unit;
    createDailyBuyingDto.quantity = dailyBuying.quantity;
    createDailyBuyingDto.Amount = dailyBuying.Amount;
    createDailyBuyingDto.price = dailyBuying.price;

    return CoreApiResponseSchema.success(
      await this.createDailyBuyingUseCase.execute(createDailyBuyingDto),
    );
  }

  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @ApiBody({ type: CreateManyDailyBuyingSchema })
  @ApiResponse({ type: CreateDailyBuyingResponseSchema })
  @Post('/createMany')
  public async createMany(
    @Body() dailyBuyings: CreateManyDailyBuyingSchema,
    @Req() req,
  ) {
    // this.createDailyBuyingUseCase = new CreateDailyBuyingUseCase(
    //   new PrismaDailyBuyingRepository(new PrismaClient()),
    // );
    const createManyDailyBuyingDto = new CreateManyDailyBuyingDto();
    createManyDailyBuyingDto.dailyBuyings = dailyBuyings.DailyBuyings.map(
      (dailyBuying) => {
        const createDailyBuyingDto = new CreateDailyBuyingDto();
        createDailyBuyingDto.particular = dailyBuying.particular;
        createDailyBuyingDto.unit = dailyBuying.unit;
        createDailyBuyingDto.quantity = dailyBuying.quantity;
        createDailyBuyingDto.Amount = dailyBuying.Amount;
        createDailyBuyingDto.price = dailyBuying.price;
        return createDailyBuyingDto;
      },
    );
    return CoreApiResponseSchema.success(
      await this.createManyDailyBuyingUseCase.execute(createManyDailyBuyingDto),
    );
  }

  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @ApiBody({ type: CreateDailyBuyingSchema })
  @ApiQuery({ type: BaseRequestQuerySchema })
  @ApiResponse({ type: UpdateDailyBuyingResponseSchema })
  @Put('/update')
  public async update(
    @Body() dailyBuying: CreateDailyBuyingSchema,
    @Req() req,
    @Query() params: { id: string },
  ) {
    // this.updateDailyBuyingUsecase = new UpdateDailyBuyingUseCase(
    //   new PrismaDailyBuyingRepository(new PrismaClient()),
    // );
    const updateDailyBuyingDto = new UpdateDailyBuyingDto();
    updateDailyBuyingDto.Id = params.id;
    updateDailyBuyingDto.particular = dailyBuying.particular;
    updateDailyBuyingDto.unit = dailyBuying.unit;
    updateDailyBuyingDto.Amount = dailyBuying.Amount;
    updateDailyBuyingDto.price = dailyBuying.price;
    updateDailyBuyingDto.quantity = dailyBuying.quantity;

    return CoreApiResponseSchema.success(
      await this.updateDailyBuyingUsecase.execute(updateDailyBuyingDto),
    );
  }

  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @ApiQuery({ type: BaseRequestQuerySchema })
  @ApiResponse({ type: GetDailyBuyingResponseSchema })
  @Get('/get')
  public async get(@Req() req, @Query() params: { id: string }) {
    // this.getDailyBuyingUsecase = new GetDailyBuyingUseCase(
    //   new PrismaDailyBuyingRepository(new PrismaClient()),
    // );

    return CoreApiResponseSchema.success(
      await this.getDailyBuyingUsecase.execute(params.id),
    );
  }

  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @ApiResponse({ type: GetDailyBuyingListResponseSchema })
  @Get('/getAll')
  public async getAll() {
    // this.getDailyBuyingListUsecase = new GetDailyBuyingListUseCase(
    //   new PrismaDailyBuyingRepository(new PrismaClient()),
    // );

    return CoreApiResponseSchema.success(
      await this.getDailyBuyingListUsecase.execute(),
    );
  }

  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @ApiQuery({ type: DailyBuyingFilterSchama })
  @ApiResponse({ type: GetDailyBuyingListResponseSchema })
  @Get('/getDailyBuyingListByName')
  public async getAllByFilter(@Query() params: DailyBuyingFilterSchama) {
    // this.getDailyBuyingListWithFilter = new GetDailyBuyingListWithFilterUseCase(
    //   new PrismaDailyBuyingRepository(new PrismaClient()),
    // );

    const filter: DailyBuyingFilter = {
      particular: params.particular || '',
      take: parseInt(params?.take?.toString() || '10'),
      skip: parseInt(params?.skip?.toString() || '0'),
    };

    return CoreApiResponseSchema.success(
      await this.getDailyBuyingListWithFilter.execute(filter),
    );
  }
}
