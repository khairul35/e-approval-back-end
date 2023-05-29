import { DeductionType } from '././deductionType';
import { EarningsRate } from '././earningsRate';
import { LeaveType } from '././leaveType';
import { ReimbursementType } from '././reimbursementType';
export declare class PayItem {
    'earningsRates'?: Array<EarningsRate>;
    'deductionTypes'?: Array<DeductionType>;
    'leaveTypes'?: Array<LeaveType>;
    'reimbursementTypes'?: Array<ReimbursementType>;
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
