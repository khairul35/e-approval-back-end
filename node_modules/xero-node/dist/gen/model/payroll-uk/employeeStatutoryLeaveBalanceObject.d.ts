import { EmployeeStatutoryLeaveBalance } from '././employeeStatutoryLeaveBalance';
import { Pagination } from '././pagination';
import { Problem } from '././problem';
export declare class EmployeeStatutoryLeaveBalanceObject {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'leaveBalance'?: EmployeeStatutoryLeaveBalance;
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
