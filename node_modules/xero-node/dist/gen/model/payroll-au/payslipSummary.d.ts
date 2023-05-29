export declare class PayslipSummary {
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
    * Employee group name
    */
    'employeeGroup'?: string;
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
