import { TrialBalanceEntry } from '././trialBalanceEntry';
export declare class TrialBalanceMovement {
    /**
    * Debit amount
    */
    'debits'?: number;
    /**
    * Credit amount
    */
    'credits'?: number;
    'movement'?: TrialBalanceEntry;
    /**
    * Value of movement. Expense and Asset accounts code debits as positive. Revenue, Liability, and Equity accounts code debits as negative
    */
    'signedMovement'?: number;
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
