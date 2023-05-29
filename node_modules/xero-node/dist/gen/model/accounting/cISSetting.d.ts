export declare class CISSetting {
    /**
    * Boolean that describes if the contact is a CIS Subcontractor
    */
    'cISEnabled'?: boolean;
    /**
    * CIS Deduction rate for the contact if he is a subcontractor. If the contact is not CISEnabled, then the rate is not returned
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
