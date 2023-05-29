import { StatementResponse } from '././statementResponse';
export declare class BankStatementAccountingResponse {
    /**
    * Xero Identifier of bank account
    */
    'bankAccountId'?: string;
    /**
    * Name of bank account
    */
    'bankAccountName'?: string;
    /**
    * Currency code of the bank account
    */
    'bankAccountCurrencyCode'?: string;
    /**
    * List of bank statements and linked accounting data for the requested period
    */
    'statements'?: Array<StatementResponse>;
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
