import { EarningsOrder } from '././earningsOrder';
import { Pagination } from '././pagination';
import { Problem } from '././problem';
export declare class EarningsOrderObject {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'statutoryDeduction'?: EarningsOrder;
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
