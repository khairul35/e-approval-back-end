import { EmployeeOpeningBalance } from '././employeeOpeningBalance';
import { Pagination } from '././pagination';
import { Problem } from '././problem';
export declare class EmployeeOpeningBalancesObject {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'openingBalances'?: Array<EmployeeOpeningBalance>;
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
