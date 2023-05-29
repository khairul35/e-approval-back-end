import { Pagination } from '././pagination';
import { PayRun } from '././payRun';
import { Problem } from '././problem';
export declare class PayRuns {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'payRuns'?: Array<PayRun>;
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
