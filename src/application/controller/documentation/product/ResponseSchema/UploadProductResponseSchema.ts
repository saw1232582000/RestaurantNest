import { ApiProperty } from '@nestjs/swagger';
import { BaseResponseSchema } from '../../common/BaseResponseSchema';

export class UploadProductImageResponse {
  @ApiProperty()
  url: string;
}

export class UploadProductImageResponseSchema extends BaseResponseSchema<UploadProductImageResponse> {
  @ApiProperty({ type: UploadProductImageResponse })
  public data: UploadProductImageResponse;
}
