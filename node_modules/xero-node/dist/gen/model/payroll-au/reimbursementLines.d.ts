import { ReimbursementLine } from '././reimbursementLine';
/**
* The reimbursement type lines
*/
export declare class ReimbursementLines {
    'reimbursementLines'?: Array<ReimbursementLine>;
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
