import { Pagination } from '././pagination';
import { Payslip } from '././payslip';
import { Problem } from '././problem';
export declare class PayslipObject {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'paySlip'?: Payslip;
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
