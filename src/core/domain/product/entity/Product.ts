import { UserRole } from 'src/core/common/type/UserEnum';

export class ProductEntity {
  id: string;

  userId: string;

  name: string;

  price: number;

  image: string;

  description: string;

  category: string;

  createdDate: Date;

  updatedDate: Date;

  constructor(
    id: string = '',
    userId: string,
    name: string,
    price: number,
    image: string,
    category: string,
    description: string,
    createdDate?: Date,
    updatedDate?: Date,
  ) {
    this.id = id;
    this.userId = userId;
    this.name = name;
    this.price = price;
    this.image = image;
    this.category = category;
    this.description = description;
    this.createdDate = createdDate || new Date();
    this.updatedDate = updatedDate || new Date();
  }

  public static toEntity(user: any): ProductEntity {
    return new ProductEntity(
      user?.id,
      user?.userId,
      user?.name,
      user?.price,
      user?.image,
      user?.category,
      user?.description,
      user?.createdDate,
      user?.updatedDate,
    );
  }
}
