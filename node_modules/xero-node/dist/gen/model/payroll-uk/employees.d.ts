import { Employee } from '././employee';
import { Pagination } from '././pagination';
import { Problem } from '././problem';
export declare class Employees {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'employees'?: Array<Employee>;
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
