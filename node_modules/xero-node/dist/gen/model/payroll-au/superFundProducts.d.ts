import { SuperFundProduct } from '././superFundProduct';
export declare class SuperFundProducts {
    'superFundProducts'?: Array<SuperFundProduct>;
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
