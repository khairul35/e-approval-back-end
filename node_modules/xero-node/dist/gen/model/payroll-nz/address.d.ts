export declare class Address {
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
    'city': string;
    /**
    * Suburb for employee home address
    */
    'suburb'?: string;
    /**
    * PostCode for employee home address
    */
    'postCode': string;
    /**
    * Country of HomeAddress
    */
    'countryName'?: string;
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
