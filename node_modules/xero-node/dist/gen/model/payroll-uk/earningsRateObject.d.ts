import { EarningsRate } from '././earningsRate';
import { Pagination } from '././pagination';
import { Problem } from '././problem';
export declare class EarningsRateObject {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'earningsRate'?: EarningsRate;
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
