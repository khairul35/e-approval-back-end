import { Pagination } from '././pagination';
import { PaySlip } from '././paySlip';
import { Problem } from '././problem';
export declare class PaySlips {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'paySlips'?: Array<PaySlip>;
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
