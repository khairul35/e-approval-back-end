import { Pagination } from '././pagination';
import { Problem } from '././problem';
import { Reimbursement } from '././reimbursement';
export declare class ReimbursementObject {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'reimbursement'?: Reimbursement;
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
