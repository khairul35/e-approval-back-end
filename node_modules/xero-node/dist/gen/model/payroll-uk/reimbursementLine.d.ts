export declare class ReimbursementLine {
    /**
    * Xero identifier for payroll reimbursement
    */
    'reimbursementTypeID'?: string;
    /**
    * Reimbursement line description
    */
    'description'?: string;
    /**
    * Reimbursement amount
    */
    'amount'?: number;
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
