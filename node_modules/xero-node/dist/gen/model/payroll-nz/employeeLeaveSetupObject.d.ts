import { EmployeeLeaveSetup } from '././employeeLeaveSetup';
import { Pagination } from '././pagination';
import { Problem } from '././problem';
export declare class EmployeeLeaveSetupObject {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'leaveSetup'?: EmployeeLeaveSetup;
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
