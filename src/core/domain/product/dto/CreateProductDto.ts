import { Expose, plainToInstance } from 'class-transformer';

import { ProductEntity } from '../entity/Product';
import { Nullable } from 'src/core/common/type/CommonTypes';

export class CreateProductDto {
  @Expose()
  id: Nullable<string>;

  @Expose()
  userId: string;

  @Expose()
  name: string;

  @Expose()
  image: string;

  @Expose()
  price: number;

  @Expose()
  description: string;

  @Expose()
  category: string;

  @Expose()
  createdDate: Nullable<Date>;

  @Expose()
  updatedDate: Nullable<Date>;

  public static convertToClass(product: ProductEntity) {
    return plainToInstance(CreateProductDto, product, {
      excludeExtraneousValues: true,
    });
  }
}
