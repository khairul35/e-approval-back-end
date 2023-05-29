import { EmployeeLeaveType } from '././employeeLeaveType';
import { Pagination } from '././pagination';
import { Problem } from '././problem';
export declare class EmployeeLeaveTypeObject {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'leaveType'?: EmployeeLeaveType;
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
