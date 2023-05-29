import { BankAccount } from '././bankAccount';
export declare class PaymentMethod {
    /**
    * The payment method code
    */
    'paymentMethod': PaymentMethod.PaymentMethodEnum;
    'bankAccounts'?: Array<BankAccount>;
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
export declare namespace PaymentMethod {
    enum PaymentMethodEnum {
        Cheque,
        Electronically,
        Manual
    }
}
