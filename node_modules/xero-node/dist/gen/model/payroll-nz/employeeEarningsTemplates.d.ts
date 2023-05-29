import { EarningsTemplate } from '././earningsTemplate';
import { Pagination } from '././pagination';
import { Problem } from '././problem';
export declare class EmployeeEarningsTemplates {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'earningTemplates'?: Array<EarningsTemplate>;
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
