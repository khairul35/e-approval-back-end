import { EmployeeOpeningBalances } from '././employeeOpeningBalances';
import { Pagination } from '././pagination';
import { Problem } from '././problem';
export declare class EmployeeOpeningBalancesObject {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'openingBalances'?: EmployeeOpeningBalances;
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
