import { Status } from "@src/core/common/type/StatusEnum";
import { BaseFilterSchema } from "src/core/common/schema/BaseFilterSchema";

export class OrderFilter extends BaseFilterSchema{
    startDate:string;
    endDate:string;
    status:Status;
    constructor(startDate:string,endDate:string,take:number,skip:number,status:Status){
        super(take,skip)
        this.startDate=startDate
        this.endDate=endDate
        this.status=status || Status.PROCESSING
    }
}