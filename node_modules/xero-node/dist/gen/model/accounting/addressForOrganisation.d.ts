export declare class AddressForOrganisation {
    /**
    * define the type of address
    */
    'addressType'?: AddressForOrganisation.AddressTypeEnum;
    /**
    * max length = 500
    */
    'addressLine1'?: string;
    /**
    * max length = 500
    */
    'addressLine2'?: string;
    /**
    * max length = 500
    */
    'addressLine3'?: string;
    /**
    * max length = 500
    */
    'addressLine4'?: string;
    /**
    * max length = 255
    */
    'city'?: string;
    /**
    * max length = 255
    */
    'region'?: string;
    /**
    * max length = 50
    */
    'postalCode'?: string;
    /**
    * max length = 50, [A-Z], [a-z] only
    */
    'country'?: string;
    /**
    * max length = 255
    */
    'attentionTo'?: string;
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
export declare namespace AddressForOrganisation {
    enum AddressTypeEnum {
        POBOX,
        STREET,
        DELIVERY
    }
}
