import { ManualTaxType } from '././manualTaxType';
export declare class TaxLine {
    /**
    * Xero identifier for payslip tax line ID.
    */
    'payslipTaxLineID'?: string;
    /**
    * The tax line amount
    */
    'amount'?: number;
    /**
    * Name of the tax type.
    */
    'taxTypeName'?: string;
    /**
    * Description of the tax line.
    */
    'description'?: string;
    'manualTaxType'?: ManualTaxType;
    /**
    * The tax line liability account code. For posted pay run you should be able to see liability account code
    */
    'liabilityAccount'?: string;
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
