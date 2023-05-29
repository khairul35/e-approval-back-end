export declare class BrandingTheme {
    /**
    * Xero identifier
    */
    'brandingThemeID'?: string;
    /**
    * Name of branding theme
    */
    'name'?: string;
    /**
    * The location of the image file used as the logo on this branding theme
    */
    'logoUrl'?: string;
    /**
    * Always INVOICE
    */
    'type'?: BrandingTheme.TypeEnum;
    /**
    * Integer – ranked order of branding theme. The default branding theme has a value of 0
    */
    'sortOrder'?: number;
    /**
    * UTC timestamp of creation date of branding theme
    */
    'createdDateUTC'?: Date;
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
export declare namespace BrandingTheme {
    enum TypeEnum {
        INVOICE
    }
}
