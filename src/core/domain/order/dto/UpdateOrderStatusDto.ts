import { Status } from "@src/core/common/type/StatusEnum";
import { Expose } from "class-transformer";

export class UpdateOrderStatusDto {
  @Expose()
  id: string;

  @Expose()
  status: Status;
}
