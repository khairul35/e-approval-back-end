import { DeductionLine } from '././deductionLine';
import { EarningsLine } from '././earningsLine';
import { LeaveAccrualLine } from '././leaveAccrualLine';
import { LeaveEarningsLine } from '././leaveEarningsLine';
import { ReimbursementLine } from '././reimbursementLine';
import { SuperannuationLine } from '././superannuationLine';
import { TaxLine } from '././taxLine';
export declare class PayslipLines {
    'earningsLines'?: Array<EarningsLine>;
    'leaveEarningsLines'?: Array<LeaveEarningsLine>;
    'timesheetEarningsLines'?: Array<EarningsLine>;
    'deductionLines'?: Array<DeductionLine>;
    'leaveAccrualLines'?: Array<LeaveAccrualLine>;
    'reimbursementLines'?: Array<ReimbursementLine>;
    'superannuationLines'?: Array<SuperannuationLine>;
    'taxLines'?: Array<TaxLine>;
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
