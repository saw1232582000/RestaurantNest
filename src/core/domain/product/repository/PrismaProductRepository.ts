// import { PrismaClient } from '@prisma/client';

// import {
//   BadRequestException,
//   HttpCode,
//   HttpException,
//   HttpStatus,
//   Inject,
//   InternalServerErrorException,
// } from '@nestjs/common';
// import {
//   PrismaClientKnownRequestError,
//   PrismaClientValidationError,
// } from '@prisma/client/runtime/library';

// import { CoreApiResponseSchema } from 'src/core/common/schema/ApiResponseSchema';
// import { IProductRepository } from '../port/repository-port/IProductRepository';
// import { ProductEntity } from '../entity/Product';
// import { ProductFilter } from '../dto/ProductFilter';
// import { PrismaService } from '@src/core/common/prisma/PrismaService';

// export class PrismaProductRepository implements IProductRepository {
//   constructor(@Inject() public readonly prisma: PrismaService) {}

//   async create(product: ProductEntity): Promise<ProductEntity> {
//     try {
//       const result = await this.prisma.product.create({
//         data: {
//           name: product.name,
//           category: product.category,
//           description: product.description,
//           image: product.image,
//           price: product.price,
//           userId: product.userId,
//         },
//         // data:{
//         //     ...product
//         // }
//       });
//       return ProductEntity.toEntity(result);
//     } catch (e) {
//       if (e instanceof PrismaClientKnownRequestError) {
//         if (e.code == 'P2002') {
//           throw new BadRequestException(
//             CoreApiResponseSchema.error(
//               HttpStatus.BAD_REQUEST,
//               'Bad Request',
//               'Email already used',
//             ),
//           );
//         } else {
//           throw new BadRequestException('Bad Request', {
//             cause: new Error(),
//             description: 'Cannot create product',
//           });
//         }
//       }
//       if (e instanceof PrismaClientValidationError) {
//         throw new InternalServerErrorException('Something bad happened', {
//           cause: new Error(),
//           description: e.message,
//         });
//       }
//     }
//   }
//   async update(product: ProductEntity): Promise<ProductEntity> {
//     try {
//       const result = await this.prisma.product.update({
//         where: { id: product.id },
//         data: {
//           name: product.name,
//           category: product.category,
//           description: product.description,
//           price: product.price,
//           userId: product.userId,
//           updatedDate: new Date(),
//         },
//       });
//       return ProductEntity.toEntity(result);
//     } catch (e) {
//       if (e instanceof PrismaClientValidationError) {
//         throw new InternalServerErrorException('Something bad happened', {
//           cause: new Error(),
//           description: e.message,
//         });
//       }
//       if (e instanceof PrismaClientKnownRequestError) {
//         throw new InternalServerErrorException('Something bad happened', {
//           cause: new Error(),
//           description: e.code,
//         });
//       }
//     }
//   }
//   async delete(id: string): Promise<boolean> {
//     try {
//       await this.prisma.product.delete({
//         where: { id: id },
//       });
//       return true;
//     } catch (e) {
//       if (e instanceof PrismaClientValidationError) {
//         throw new InternalServerErrorException('Something bad happened', {
//           cause: new Error(),
//           description: e.message,
//         });
//       }
//       if (e instanceof PrismaClientKnownRequestError) {
//         throw new InternalServerErrorException('Something bad happened', {
//           cause: new Error(),
//           description: e.code,
//         });
//       }
//     }
//   }
//   async find(by: {
//     id?: string;
//     email?: string;
//     name?: string;
//   }): Promise<ProductEntity | null> {
//     try {
//       const product = await this.prisma.product.findFirst({
//         where: {
//           ...by,
//         },
//       });

//       if (product) return ProductEntity.toEntity(product);
//       else return null;
//     } catch (e) {
//       if (e instanceof PrismaClientValidationError) {
//         throw new InternalServerErrorException('Something bad happened', {
//           cause: new Error(),
//           description: e.message,
//         });
//       }
//       if (e instanceof PrismaClientKnownRequestError) {
//         throw new InternalServerErrorException('Something bad happened', {
//           cause: new Error(),
//           description: e.code,
//         });
//       }
//     }
//   }
//   async findAll(): Promise<ProductEntity[]> {
//     const products = await this.prisma.product.findMany({});

//     return products.map((product) => ProductEntity.toEntity(product));
//   }

//   async findAllWithSchema(
//     filter: ProductFilter,
//   ): Promise<{ products: ProductEntity[]; totalCounts: number }> {
//     // console.log(filter)
//     const totalCounts = await this.prisma.product.count({
//       where: {
//         name: { contains: filter.name },
//         category: {
//           contains: filter.category,
//         },
//       },
//     });
//     const products = await this.prisma.product.findMany({
//       where: {
//         name: { contains: filter.name },
//         category: {
//           contains: filter.category,
//         },
//       },
//       take: filter.take,
//       skip: filter.skip,
//     });
//     // console.log(products)

//     return {
//       products: products.map((product) => ProductEntity.toEntity(product)),
//       totalCounts: totalCounts,
//     };
//   }
// }

// src/product/repository/prisma-product.repository.ts
import { Injectable } from '@nestjs/common';

import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { ProductRepository } from '../port/repository-port/IProductRepository';
import { PrismaService } from '@src/core/common/prisma/PrismaService';
import { ProductEntity } from '../entity/Product';
import { ProductFilterDto } from '../dto/ProductFilter';

@Injectable()
export class PrismaProductRepository implements ProductRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(entity: ProductEntity): Promise<ProductEntity> {
    try {
      // Create a data object for product creation, omitting id if it's empty
      const data = { ...entity };

      // Remove id if it's empty so Prisma can generate one
      if (!data.id) {
        delete data.id;
      }

      const result = await this.prisma.product.create({
        data,
      });
      return new ProductEntity(result);
    } catch (e) {
      this.handlePrismaError(e, 'Cannot create product');
    }
  }

  async update(entity: ProductEntity): Promise<ProductEntity> {
    try {
      const result = await this.prisma.product.update({
        where: { id: entity.id },
        data: { ...entity, updatedDate: new Date() },
      });
      return new ProductEntity(result);
    } catch (e) {
      this.handlePrismaError(e, 'Cannot update product');
    }
  }

  async delete(id: string): Promise<boolean> {
    try {
      await this.prisma.product.delete({ where: { id } });
      return true;
    } catch (e) {
      this.handlePrismaError(e, 'Cannot delete product');
    }
  }

  async find(by: {
    id?: string;
    name?: string;
  }): Promise<ProductEntity | null> {
    try {
      const result = await this.prisma.product.findFirst({ where: by });
      return result ? new ProductEntity(result) : null;
    } catch (e) {
      this.handlePrismaError(e, 'Cannot find product');
    }
  }

  async findAll(): Promise<ProductEntity[]> {
    try {
      const results = await this.prisma.product.findMany();
      return results.map((r) => new ProductEntity(r));
    } catch (e) {
      this.handlePrismaError(e, 'Cannot fetch products');
    }
  }

  async findAllWithFilter(
    filter: ProductFilterDto,
  ): Promise<{ products: ProductEntity[]; totalCounts: number }> {
    try {
      const [totalCounts, products] = await Promise.all([
        this.prisma.product.count({
          where: {
            name: { contains: filter.name },
            category: { contains: filter.category },
          },
        }),
        this.prisma.product.findMany({
          where: {
            name: { contains: filter.name },
            category: { contains: filter.category },
          },
          take: filter.take,
          skip: filter.skip,
        }),
      ]);
      return {
        products: products.map((p) => new ProductEntity(p)),
        totalCounts,
      };
    } catch (e) {
      this.handlePrismaError(e, 'Cannot fetch filtered products');
    }
  }

  private handlePrismaError(error: unknown, message: string): never {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        throw new BadRequestException(`${message}: Name already exists`);
      }
      throw new BadRequestException(`${message}: ${error.message}`);
    }
    throw new InternalServerErrorException('An unexpected error occurred');
  }
}
