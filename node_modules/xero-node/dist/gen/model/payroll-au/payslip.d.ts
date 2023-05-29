import { DeductionLine } from '././deductionLine';
import { EarningsLine } from '././earningsLine';
import { LeaveAccrualLine } from '././leaveAccrualLine';
import { LeaveEarningsLine } from '././leaveEarningsLine';
import { ReimbursementLine } from '././reimbursementLine';
import { SuperannuationLine } from '././superannuationLine';
import { TaxLine } from '././taxLine';
export declare class Payslip {
    /**
    * The Xero identifier for an employee
    */
    'employeeID'?: string;
    /**
    * Xero identifier for the payslip
    */
    'payslipID'?: string;
    /**
    * First name of employee
    */
    'firstName'?: string;
    /**
    * Last name of employee
    */
    'lastName'?: string;
    /**
    * The Wages for the Payslip
    */
    'wages'?: number;
    /**
    * The Deductions for the Payslip
    */
    'deductions'?: number;
    /**
    * The Tax for the Payslip
    */
    'tax'?: number;
    /**
    * The Super for the Payslip
    */
    '_super'?: number;
    /**
    * The Reimbursements for the Payslip
    */
    'reimbursements'?: number;
    /**
    * The NetPay for the Payslip
    */
    'netPay'?: number;
    'earningsLines'?: Array<EarningsLine>;
    'leaveEarningsLines'?: Array<LeaveEarningsLine>;
    'timesheetEarningsLines'?: Array<EarningsLine>;
    'deductionLines'?: Array<DeductionLine>;
    'leaveAccrualLines'?: Array<LeaveAccrualLine>;
    'reimbursementLines'?: Array<ReimbursementLine>;
    'superannuationLines'?: Array<SuperannuationLine>;
    'taxLines'?: Array<TaxLine>;
    /**
    * Last modified timestamp
    */
    'updatedDateUTC'?: Date;
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
