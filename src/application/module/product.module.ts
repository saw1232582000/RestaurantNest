import { Module } from '@nestjs/common';

import { IUserRepository } from 'src/core/domain/user/port/repository-port/IUserRepositoryPort';
import { PrismaUserRepository } from 'src/core/domain/user/repository/PrismaUserRepository';
import { JwtGuard } from '../auth/guard/jwt.guard';

import { GetUserUseCase } from 'src/core/domain/user/service/GetUserUsecase';
import { ProductController } from '../controller/product.controller';
import { CreateProductUseCase } from 'src/core/domain/product/service/CreateProductUseCase';
import { IProductRepository } from 'src/core/domain/product/port/repository-port/IProductRepository';
import { PrismaProductRepository } from 'src/core/domain/product/repository/PrismaProductRepository';
import { UpdateProductUseCase } from 'src/core/domain/product/service/UpdateProductUseCase';
import { GetProductUseCase } from 'src/core/domain/product/service/GetProductUseCase';
import { GetProductListUseCase, GetProductListWithFilterUseCase } from 'src/core/domain/product/service/GetProductListUseCase';
import { S3Service } from 'src/core/common/file-upload/UploadS3Service';
import { PrismaService } from '@src/core/common/prisma/PrismaService';

@Module({
  controllers: [ProductController],
  providers: [
    CreateProductUseCase,
    UpdateProductUseCase,
    GetProductUseCase,
    GetProductListUseCase,
    GetProductListWithFilterUseCase,
    JwtGuard,
    // PrismaService,
    S3Service,
    {
      provide: IProductRepository,
      useClass: PrismaProductRepository,
    },
  ],
})
export class ProductModule {}
