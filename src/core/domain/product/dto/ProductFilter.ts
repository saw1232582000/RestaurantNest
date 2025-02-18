import { BaseFilterSchema } from 'src/core/common/schema/BaseFilterSchema';

export class ProductFilter extends BaseFilterSchema {
  name?: string;
  category?: string;
  constructor(category: string, name: string, take: number, skip: number) {
    super(take, skip);
    this.name = name || '';
    this.category = category || '';
  }
}
