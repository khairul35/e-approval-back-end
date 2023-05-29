import { EmployeeLeave } from '././employeeLeave';
import { Pagination } from '././pagination';
import { Problem } from '././problem';
export declare class EmployeeLeaveObject {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'leave'?: EmployeeLeave;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
