import { ApiProperty } from '@nestjs/swagger';
import { BaseResponseSchema } from '../../common/BaseResponseSchema';
import { GetUserResponse } from './GetUserResponseSchema';

export class GetUserListResponseSchema extends BaseResponseSchema<
  GetUserResponse[]
> {
  @ApiProperty({ type: [GetUserResponse] })
  public data: GetUserResponse[];
}
