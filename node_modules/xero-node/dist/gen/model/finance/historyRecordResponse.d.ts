export declare class HistoryRecordResponse {
    /**
    * The type of change recorded against the document
    */
    'changes'?: string;
    /**
    * UTC date that the history record was created
    */
    'dateUTCString'?: string;
    /**
    * UTC date that the history record was created
    */
    'dateUTC'?: Date;
    /**
    * The users first and last name
    */
    'user'?: string;
    /**
    * Description of the change event or transaction
    */
    'details'?: string;
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
