import { BankStatementResponse } from '././bankStatementResponse';
import { CashAccountResponse } from '././cashAccountResponse';
import { StatementBalanceResponse } from '././statementBalanceResponse';
export declare class CashValidationResponse {
    /**
    * The Xero identifier for an account
    */
    'accountId'?: string;
    'statementBalance'?: StatementBalanceResponse;
    /**
    * UTC Date when the last bank statement item was entered into Xero. This date is represented in ISO 8601 format.
    */
    'statementBalanceDate'?: string;
    'bankStatement'?: BankStatementResponse;
    'cashAccount'?: CashAccountResponse;
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
