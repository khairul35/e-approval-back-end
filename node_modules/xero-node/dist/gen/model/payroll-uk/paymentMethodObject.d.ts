import { Pagination } from '././pagination';
import { PaymentMethod } from '././paymentMethod';
import { Problem } from '././problem';
export declare class PaymentMethodObject {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'paymentMethod'?: PaymentMethod;
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
