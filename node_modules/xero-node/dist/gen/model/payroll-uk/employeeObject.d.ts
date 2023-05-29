import { Employee } from '././employee';
import { Pagination } from '././pagination';
import { Problem } from '././problem';
export declare class EmployeeObject {
    'pagination'?: Pagination;
    'employee'?: Employee;
    'problem'?: Problem;
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
