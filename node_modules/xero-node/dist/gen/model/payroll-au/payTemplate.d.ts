import { DeductionLine } from '././deductionLine';
import { EarningsLine } from '././earningsLine';
import { LeaveLine } from '././leaveLine';
import { ReimbursementLine } from '././reimbursementLine';
import { SuperLine } from '././superLine';
export declare class PayTemplate {
    'earningsLines'?: Array<EarningsLine>;
    'deductionLines'?: Array<DeductionLine>;
    'superLines'?: Array<SuperLine>;
    'reimbursementLines'?: Array<ReimbursementLine>;
    'leaveLines'?: Array<LeaveLine>;
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
