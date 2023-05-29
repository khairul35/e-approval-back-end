export declare class Phone {
    'phoneType'?: Phone.PhoneTypeEnum;
    /**
    * max length = 50
    */
    'phoneNumber'?: string;
    /**
    * max length = 10
    */
    'phoneAreaCode'?: string;
    /**
    * max length = 20
    */
    'phoneCountryCode'?: string;
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
export declare namespace Phone {
    enum PhoneTypeEnum {
        DEFAULT,
        DDI,
        MOBILE,
        FAX,
        OFFICE
    }
}
