import { EmployeeTax } from '././employeeTax';
import { Pagination } from '././pagination';
import { Problem } from '././problem';
export declare class EmployeeTaxObject {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'employeeTax'?: EmployeeTax;
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
