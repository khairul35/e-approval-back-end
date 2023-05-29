import { State } from '././state';
export declare class HomeAddress {
    /**
    * Address line 1 for employee home address
    */
    'addressLine1': string;
    /**
    * Address line 2 for employee home address
    */
    'addressLine2'?: string;
    /**
    * Suburb for employee home address
    */
    'city'?: string;
    'region'?: State;
    /**
    * PostCode for employee home address
    */
    'postalCode'?: string;
    /**
    * Country of HomeAddress
    */
    'country'?: string;
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
