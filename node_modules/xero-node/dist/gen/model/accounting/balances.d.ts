import { AccountsPayable } from '././accountsPayable';
import { AccountsReceivable } from '././accountsReceivable';
/**
* The raw AccountsReceivable(sales invoices) and AccountsPayable(bills) outstanding and overdue amounts, not converted to base currency (read only)
*/
export declare class Balances {
    'accountsReceivable'?: AccountsReceivable;
    'accountsPayable'?: AccountsPayable;
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
