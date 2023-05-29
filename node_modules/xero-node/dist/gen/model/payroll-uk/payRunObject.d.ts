import { Pagination } from '././pagination';
import { PayRun } from '././payRun';
import { Problem } from '././problem';
export declare class PayRunObject {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'payRun'?: PayRun;
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
