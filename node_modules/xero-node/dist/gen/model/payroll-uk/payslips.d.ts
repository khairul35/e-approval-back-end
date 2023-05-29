import { Pagination } from '././pagination';
import { Payslip } from '././payslip';
import { Problem } from '././problem';
export declare class Payslips {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'paySlips'?: Array<Payslip>;
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
