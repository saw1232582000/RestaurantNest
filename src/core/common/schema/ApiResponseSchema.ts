import { ApiProperty } from '@nestjs/swagger';

export class CoreApiResponseSchema<T> {
  @ApiProperty()
  public readonly code: number;
  @ApiProperty()
  public readonly message: string;
  public readonly data: NonNullable<T>;
  public readonly error: NonNullable<T>;

  constructor(code: number, message: string, data?: T, error?: T) {
    this.code = code;
    this.message = message;
    this.data = data;
    this.error = error;
  }

  public static success<T>(
    data?: T,
    message?: string,
  ): CoreApiResponseSchema<T> {
    return new CoreApiResponseSchema(200, message || 'Success', data);
  }

  public static error<T>(
    code?: number,
    message?: string,
    error?: T,
  ): CoreApiResponseSchema<T> {
    return new CoreApiResponseSchema(
      code || 500,
      message || 'Internal Server Error',
      undefined,
      error,
    );
  }
}
