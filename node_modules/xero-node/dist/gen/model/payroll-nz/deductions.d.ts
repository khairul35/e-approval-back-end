import { Deduction } from '././deduction';
import { Pagination } from '././pagination';
import { Problem } from '././problem';
export declare class Deductions {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'deductions'?: Array<Deduction>;
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
