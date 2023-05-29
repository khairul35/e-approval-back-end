export declare class InvalidField {
    /**
    * The name of the field that caused the error
    */
    'name'?: string;
    /**
    * The reason the error occurred
    */
    'reason'?: string;
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
