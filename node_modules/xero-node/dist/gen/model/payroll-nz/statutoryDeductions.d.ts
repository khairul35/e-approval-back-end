import { Pagination } from '././pagination';
import { Problem } from '././problem';
import { StatutoryDeduction } from '././statutoryDeduction';
export declare class StatutoryDeductions {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'statutoryDeductions'?: Array<StatutoryDeduction>;
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
