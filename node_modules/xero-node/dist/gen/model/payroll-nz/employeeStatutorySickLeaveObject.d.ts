import { EmployeeStatutorySickLeave } from '././employeeStatutorySickLeave';
import { Pagination } from '././pagination';
import { Problem } from '././problem';
export declare class EmployeeStatutorySickLeaveObject {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'statutorySickLeave'?: EmployeeStatutorySickLeave;
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
