import { PayRunStatus } from '././payRunStatus';
import { PayslipSummary } from '././payslipSummary';
import { ValidationError } from '././validationError';
export declare class PayRun {
    /**
    * Xero identifier for pay run
    */
    'payrollCalendarID': string;
    /**
    * Xero identifier for pay run
    */
    'payRunID'?: string;
    /**
    * Period Start Date for the PayRun (YYYY-MM-DD)
    */
    'payRunPeriodStartDate'?: string;
    /**
    * Period End Date for the PayRun (YYYY-MM-DD)
    */
    'payRunPeriodEndDate'?: string;
    'payRunStatus'?: PayRunStatus;
    /**
    * Payment Date for the PayRun (YYYY-MM-DD)
    */
    'paymentDate'?: string;
    /**
    * Payslip message for the PayRun
    */
    'payslipMessage'?: string;
    /**
    * Last modified timestamp
    */
    'updatedDateUTC'?: Date;
    /**
    * The payslips in the payrun
    */
    'payslips'?: Array<PayslipSummary>;
    /**
    * The total Wages for the Payrun
    */
    'wages'?: number;
    /**
    * The total Deductions for the Payrun
    */
    'deductions'?: number;
    /**
    * The total Tax for the Payrun
    */
    'tax'?: number;
    /**
    * The total Super for the Payrun
    */
    '_super'?: number;
    /**
    * The total Reimbursements for the Payrun
    */
    'reimbursement'?: number;
    /**
    * The total NetPay for the Payrun
    */
    'netPay'?: number;
    /**
    * Displays array of validation error messages from the API
    */
    'validationErrors'?: Array<ValidationError>;
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
