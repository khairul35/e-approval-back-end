export declare class ReimbursementLine {
    /**
    * Xero reimbursement type identifier
    */
    'reimbursementTypeID'?: string;
    /**
    * Reimbursement type amount
    */
    'amount'?: number;
    /**
    * Reimbursement lines description (max length 50)
    */
    'description'?: string;
    /**
    * Reimbursement expense account. For posted pay run you should be able to see expense account code.
    */
    'expenseAccount'?: string;
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
