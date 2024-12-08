import { ApiProperty } from '@nestjs/swagger';
import { BaseResponseSchema } from '../../common/BaseResponseSchema';

class Product {
  @ApiProperty()
  id: string;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  description: string;

  @ApiProperty()
  category: string;

  @ApiProperty()
  createdDate: Date;

  @ApiProperty()
  updateddDate: Date;
}

class GetProductList {
  @ApiProperty({ type: [Product] })
  products: Product[];

  @ApiProperty()
  totalCount: number;
}

export class GetProductListResponseSchema extends BaseResponseSchema<GetProductList> {
  @ApiProperty({ type: GetProductList })
  public data: GetProductList;
}
