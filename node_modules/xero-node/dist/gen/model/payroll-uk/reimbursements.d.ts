import { Pagination } from '././pagination';
import { Problem } from '././problem';
import { Reimbursement } from '././reimbursement';
export declare class Reimbursements {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'reimbursements'?: Array<Reimbursement>;
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
