import { LeavePeriod } from '././leavePeriod';
import { Pagination } from '././pagination';
import { Problem } from '././problem';
export declare class LeavePeriods {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'periods'?: Array<LeavePeriod>;
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
