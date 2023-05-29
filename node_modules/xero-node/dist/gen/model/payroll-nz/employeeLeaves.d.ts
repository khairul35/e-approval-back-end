import { EmployeeLeave } from '././employeeLeave';
import { Pagination } from '././pagination';
import { Problem } from '././problem';
export declare class EmployeeLeaves {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'leave'?: Array<EmployeeLeave>;
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
