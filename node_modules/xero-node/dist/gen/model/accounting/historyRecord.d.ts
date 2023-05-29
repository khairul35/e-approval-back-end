export declare class HistoryRecord {
    /**
    * details
    */
    'details'?: string;
    /**
    * Name of branding theme
    */
    'changes'?: string;
    /**
    * has a value of 0
    */
    'user'?: string;
    /**
    * UTC timestamp of creation date of branding theme
    */
    'dateUTC'?: Date;
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
