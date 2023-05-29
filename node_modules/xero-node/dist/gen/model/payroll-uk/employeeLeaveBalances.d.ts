import { EmployeeLeaveBalance } from '././employeeLeaveBalance';
import { Pagination } from '././pagination';
import { Problem } from '././problem';
export declare class EmployeeLeaveBalances {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'leaveBalances'?: Array<EmployeeLeaveBalance>;
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
