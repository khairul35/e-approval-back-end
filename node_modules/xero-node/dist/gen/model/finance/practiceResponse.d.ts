export declare class PracticeResponse {
    /**
    * Year of becoming a partner.
    */
    'xeroPartnerSince'?: number;
    /**
    * Customer tier e.g. Silver
    */
    'tier'?: string;
    /**
    * Country of location.
    */
    'location'?: string;
    /**
    * Organisation count.
    */
    'organisationCount'?: number;
    /**
    * Staff certified (true/false).
    */
    'staffCertified'?: boolean;
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
