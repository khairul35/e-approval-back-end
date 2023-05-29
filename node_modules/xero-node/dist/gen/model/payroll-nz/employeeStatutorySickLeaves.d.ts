import { EmployeeStatutorySickLeave } from '././employeeStatutorySickLeave';
import { Pagination } from '././pagination';
import { Problem } from '././problem';
export declare class EmployeeStatutorySickLeaves {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'statutorySickLeave'?: Array<EmployeeStatutorySickLeave>;
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
