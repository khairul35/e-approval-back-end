export declare class ExternalLink {
    /**
    * See External link types
    */
    'linkType'?: ExternalLink.LinkTypeEnum;
    /**
    * URL for service e.g. http://twitter.com/xeroapi
    */
    'url'?: string;
    'description'?: string;
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
export declare namespace ExternalLink {
    enum LinkTypeEnum {
        Facebook,
        GooglePlus,
        LinkedIn,
        Twitter,
        Website
    }
}
