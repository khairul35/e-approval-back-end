export declare class CISOrgSetting {
    /**
    * true or false - Boolean that describes if the organisation is a CIS Contractor
    */
    'cISContractorEnabled'?: boolean;
    /**
    * true or false - Boolean that describes if the organisation is a CIS SubContractor
    */
    'cISSubContractorEnabled'?: boolean;
    /**
    * CIS Deduction rate for the organisation
    */
    'rate'?: number;
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
