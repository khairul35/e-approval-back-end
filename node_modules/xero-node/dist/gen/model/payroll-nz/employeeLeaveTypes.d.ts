import { EmployeeLeaveType } from '././employeeLeaveType';
import { Pagination } from '././pagination';
import { Problem } from '././problem';
export declare class EmployeeLeaveTypes {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'leaveTypes'?: Array<EmployeeLeaveType>;
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
