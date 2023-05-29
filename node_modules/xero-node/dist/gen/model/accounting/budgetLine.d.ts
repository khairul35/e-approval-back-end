import { BudgetBalance } from '././budgetBalance';
export declare class BudgetLine {
    /**
    * See Accounts
    */
    'accountID'?: string;
    /**
    * See Accounts
    */
    'accountCode'?: string;
    'budgetBalances'?: Array<BudgetBalance>;
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
