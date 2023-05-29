import { Deduction } from '././deduction';
import { Pagination } from '././pagination';
import { Problem } from '././problem';
export declare class DeductionObject {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'deduction'?: Deduction;
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
