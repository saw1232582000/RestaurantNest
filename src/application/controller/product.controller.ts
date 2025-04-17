// import {
//   Body,
//   Controller,
//   FileTypeValidator,
//   Get,
//   MaxFileSizeValidator,
//   Param,
//   ParseFilePipe,
//   Post,
//   Put,
//   Query,
//   Req,
//   UploadedFile,
//   UseGuards,
//   UseInterceptors,
// } from '@nestjs/common';
// import {
//   ApiBearerAuth,
//   ApiBody,
//   ApiConsumes,
//   ApiQuery,
//   ApiResponse,
//   ApiTags,
// } from '@nestjs/swagger';
// import { CreateProductDto } from 'src/core/domain/product/dto/CreateProductDto';
// import { CreateProductUseCase } from 'src/core/domain/product/service/CreateProductUseCase';
// import { CreateProductSchema } from './documentation/product/RequestSchema/CreateProductRequestSchema';
// import { JwtGuard } from '../auth/guard/jwt.guard';
// import { PrismaProductRepository } from 'src/core/domain/product/repository/PrismaProductRepository';
// import { PrismaClient } from '@prisma/client';
// import { CoreApiResonseSchema } from 'src/core/common/schema/ApiResponseSchema';
// import { UpdateProductDto } from 'src/core/domain/product/dto/UpdateProductDto';
// import { BaseRequestQuerySchema } from './documentation/common/BaseRequestQuerySchema';
// import { UpdateProductUseCase } from 'src/core/domain/product/service/UpdateProductUseCase';
// import { GetProductUseCase } from 'src/core/domain/product/service/GetProductUseCase';
// import {
//   GetProductListUseCase,
//   GetProductListWithFilterUseCase,
// } from 'src/core/domain/product/service/GetProductListUseCase';
// import { CreateProductResponseSchema } from './documentation/product/ResponseSchema/CreateProductResponseSchema';
// import { UpdateProductResponseSchema } from './documentation/product/ResponseSchema/UpdateProductResponseSchema';
// import { GetProductResponseSchema } from './documentation/product/ResponseSchema/GetProductResponseSchema';
// import { GetProductListResponseSchema } from './documentation/product/ResponseSchema/GetProductListResponseSchema';
// import { ProdcutFilterSchama } from './documentation/product/RequestSchema/ProductFilterSchema';
// import { ProductFilter } from 'src/core/domain/product/dto/ProductFilter';
// import { FileInterceptor } from '@nestjs/platform-express';
// import { S3Service } from 'src/core/common/file-upload/UploadS3Service';
// import { UploadProductImageResponseSchema } from './documentation/product/ResponseSchema/UploadProductResponseSchema';

// @Controller('Product')
// @ApiTags('product')
// export class ProductController {
//   constructor(
//     private createProductUseCase: CreateProductUseCase,
//     private updateProductUsecase: UpdateProductUseCase,
//     private getProductUsecase: GetProductUseCase,
//     private getProductListUsecase: GetProductListUseCase,
//     private getProductListWithFilter: GetProductListWithFilterUseCase,
//     private s3Service: S3Service,
//   ) {}

//   @ApiBearerAuth()
//   @UseGuards(JwtGuard)
//   @ApiBody({ type: CreateProductSchema })
//   @ApiResponse({ type: CreateProductResponseSchema })
//   @Post('/create')
//   public async create(@Body() product: CreateProductSchema, @Req() req) {
//     // this.createProductUseCase = new CreateProductUseCase(
//     //   new PrismaProductRepository(new PrismaClient()),
//     // );
//     const createProductDto = new CreateProductDto();
//     createProductDto.userId = req.user?.user?.id;
//     createProductDto.name = product.name;
//     createProductDto.image = product.image;
//     createProductDto.description = product.description;
//     createProductDto.category = product.category;
//     createProductDto.price = product.price;

//     return CoreApiResonseSchema.success(
//       await this.createProductUseCase.execute(createProductDto),
//     );
//   }

//   @ApiBearerAuth()
//   @UseGuards(JwtGuard)
//   @ApiBody({ type: CreateProductSchema })
//   @ApiQuery({ type: BaseRequestQuerySchema })
//   @ApiResponse({ type: UpdateProductResponseSchema })
//   @Put('/update')
//   public async update(
//     @Body() product: CreateProductSchema,
//     @Req() req,
//     @Query() params: { id: string },
//   ) {
//     // this.updateProductUsecase = new UpdateProductUseCase(
//     //   new PrismaProductRepository(new PrismaClient()),
//     // );
//     const updateProductDto = new UpdateProductDto();
//     updateProductDto.id = params.id;
//     updateProductDto.userId = req.user?.user?.id;
//     updateProductDto.name = product.name;
//     updateProductDto.description = product.description;
//     updateProductDto.category = product.category;
//     updateProductDto.price = product.price;

//     return CoreApiResonseSchema.success(
//       await this.updateProductUsecase.execute(updateProductDto),
//     );
//   }

//   @ApiBearerAuth()
//   @UseGuards(JwtGuard)
//   @ApiQuery({ type: BaseRequestQuerySchema })
//   @ApiResponse({ type: GetProductResponseSchema })
//   @Get('/get')
//   public async get(@Req() req, @Query() params: { id: string }) {
//     // this.getProductUsecase = new GetProductUseCase(
//     //   new PrismaProductRepository(new PrismaClient()),
//     // );

//     return CoreApiResonseSchema.success(
//       await this.getProductUsecase.execute(params.id),
//     );
//   }

//   @ApiBearerAuth()
//   @UseGuards(JwtGuard)
//   @ApiResponse({ type: GetProductListResponseSchema })
//   @Get('/getAll')
//   public async getAll() {
//     // this.getProductListUsecase = new GetProductListUseCase(
//     //   new PrismaProductRepository(new PrismaClient()),
//     // );

//     return CoreApiResonseSchema.success(
//       await this.getProductListUsecase.execute(),
//     );
//   }

//   @ApiBearerAuth()
//   @UseGuards(JwtGuard)
//   // @ApiQuery({ type: ProdcutFilterSchama })
//   @ApiResponse({ type: GetProductListResponseSchema })
//   @Get('/getProductListByName')
//   public async getAllByFilter(@Query() params: ProdcutFilterSchama) {
//     // this.getProductListWithFilter = new GetProductListWithFilterUseCase(
//     //   new PrismaProductRepository(new PrismaClient()),
//     // );

//     const filter = new ProductFilter(
//       params.category,
//       params.name,
//       parseInt(params?.take.toString()),
//       parseInt(params?.skip.toString()),
//     );
//     return CoreApiResonseSchema.success(
//       await this.getProductListWithFilter.execute(filter),
//     );
//   }

//   @ApiBearerAuth()
//   @UseGuards(JwtGuard)
//   @Post('/upload')
//   @ApiConsumes('multipart/form-data')
//   @ApiBody({
//     schema: {
//       type: 'object',
//       properties: {
//         file: {
//           type: 'string',
//           format: 'binary',
//         },
//       },
//     },
//   })
//   @ApiResponse({ type: UploadProductImageResponseSchema })
//   @UseInterceptors(FileInterceptor('file'))
//   public async Upload(
//     @UploadedFile(
//       new ParseFilePipe({
//         validators: [
//           new MaxFileSizeValidator({ maxSize: 5 * 1024 * 1024 }), //max size 5MB
//           new FileTypeValidator({ fileType: /\/(jpg|jpeg|png|gif|bmp|webp)$/ }),
//         ],
//       }),
//     ) // eslint-disable-next-line no-undef
//     file: Express.Multer.File,
//   ) {
//     return CoreApiResonseSchema.success({
//       url: await this.s3Service.uploadFile(file, 'restaurant/menus'),
//     });
//   }
// }

// src/product/product.controller.ts
import {
  Controller,
  Post,
  Body,
  Req,
  UseGuards,
  Put,
  Query,
  Get,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiProperty,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { FileInterceptor } from '@nestjs/platform-express';
import {
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  ValidationPipe,
} from '@nestjs/common/pipes';
import {
  CreateProductUseCase,
  GetProductListUseCase,
  GetProductListWithFilterUseCase,
  GetProductUseCase,
  UpdateProductUseCase,
} from '@src/core/domain/product/port/service-port/IProductUseCase';
import { S3Service } from '@src/core/common/file-upload/UploadS3Service';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { CreateProductDto } from '@src/core/domain/product/dto/CreateProductDto';
import { ProductResponseDto } from '@src/core/domain/product/dto/ProductResponseDto';
import { CoreApiResponseSchema } from '@src/core/common/schema/ApiResponseSchema';
import { UpdateProductDto } from '@src/core/domain/product/dto/UpdateProductDto';
import { ProductListResponseDto } from '@src/core/domain/product/dto/ProductListResponseDto';
import { ProductFilterDto } from '@src/core/domain/product/dto/ProductFilter';

class ProductResponseSchema extends CoreApiResponseSchema<ProductResponseDto> {
  @ApiProperty({ type: ProductResponseDto })
  data: ProductResponseDto;
}

class ProductListResponseSchema extends CoreApiResponseSchema<ProductListResponseDto> {
  @ApiProperty({ type: ProductListResponseDto })
  data: ProductListResponseDto;
}

class UploadResponseSchema extends CoreApiResponseSchema<{ url: string }> {
  @ApiProperty({ type: Object, properties: { url: { type: 'string' } } })
  data: { url: string };
}

@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(
    private readonly createProductUseCase: CreateProductUseCase,
    private readonly updateProductUseCase: UpdateProductUseCase,
    private readonly getProductUseCase: GetProductUseCase,
    private readonly getProductListUseCase: GetProductListUseCase,
    private readonly getProductListWithFilterUseCase: GetProductListWithFilterUseCase,
    private readonly s3Service: S3Service,
  ) {}

  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @Post('/create')
  @ApiBody({ type: CreateProductDto })
  @ApiResponse({ status: 201, type: ProductResponseSchema })
  async create(
    @Body(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    )
    dto: CreateProductDto,
    @Req() req,
  ): Promise<CoreApiResponseSchema<ProductResponseDto>> {
    dto.userId = req.user?.user?.id || '';
    if (!dto.userId)
      throw new BadRequestException('User ID missing from token');
    const result = await this.createProductUseCase.execute(dto);
    return CoreApiResponseSchema.success(result);
  }

  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @Put('/update')
  @ApiBody({ type: CreateProductDto })
  @ApiQuery({ name: 'id', type: String })
  @ApiResponse({ status: 200, type: ProductResponseSchema })
  async update(
    @Body(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    )
    body: CreateProductDto,
    @Query(
      'id',
      new ValidationPipe({
        transform: true,
      }),
    )
    id: string,
    @Req() req,
  ): Promise<CoreApiResponseSchema<ProductResponseDto>> {
    const userId = req.user?.user?.id || '';
    if (!userId) throw new BadRequestException('User ID missing from token');
    const dto = new UpdateProductDto({ ...body, id, userId });
    const result = await this.updateProductUseCase.execute(dto);
    return CoreApiResponseSchema.success(result);
  }

  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @Get('/get')
  @ApiQuery({ name: 'id', type: String })
  @ApiResponse({ status: 200, type: ProductResponseSchema })
  async get(
    @Query(
      'id',
      new ValidationPipe({
        transform: true,
      }),
    )
    id: string,
  ): Promise<CoreApiResponseSchema<ProductResponseDto>> {
    const result = await this.getProductUseCase.execute(id);
    return CoreApiResponseSchema.success(result);
  }

  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @Get('/getAll')
  @ApiResponse({ status: 200, type: ProductListResponseSchema })
  async getAll(): Promise<CoreApiResponseSchema<ProductListResponseDto>> {
    const result = await this.getProductListUseCase.execute();
    return CoreApiResponseSchema.success(result);
  }

  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @Get('/getProductListByName')
  @ApiResponse({ status: 200, type: ProductListResponseSchema })
  async getAllByFilter(
    @Query(
      new ValidationPipe({
        transform: true,
        transformOptions: { enableImplicitConversion: true },
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    )
    query: ProductFilterDto,
  ): Promise<CoreApiResponseSchema<ProductListResponseDto>> {
    const result = await this.getProductListWithFilterUseCase.execute(query);
    return CoreApiResponseSchema.success(result);
  }

  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @Post('/upload')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: { file: { type: 'string', format: 'binary' } },
    },
  })
  @ApiResponse({ status: 201, type: UploadResponseSchema })
  @UseInterceptors(FileInterceptor('file'))
  async upload(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 5 * 1024 * 1024 }), // 5MB
          new FileTypeValidator({ fileType: /\/(jpg|jpeg|png|gif|bmp|webp)$/ }),
        ],
      }),
    )
    file: Express.Multer.File,
  ): Promise<CoreApiResponseSchema<{ url: string }>> {
    const url = await this.s3Service.uploadFile(file, 'restaurant/menus');
    return CoreApiResponseSchema.success({ url });
  }
}
