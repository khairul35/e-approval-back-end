import { PaymentTermType } from '././paymentTermType';
export declare class Bill {
    /**
    * Day of Month (0-31)
    */
    'day'?: number;
    'type'?: PaymentTermType;
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
