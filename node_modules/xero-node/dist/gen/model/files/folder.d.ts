export declare class Folder {
    /**
    * The name of the folder
    */
    'name'?: string;
    /**
    * The number of files in the folder
    */
    'fileCount'?: number;
    /**
    * The email address used to email files to the inbox. Only the inbox will have this element.
    */
    'email'?: string;
    /**
    * to indicate if the folder is the Inbox. The Inbox cannot be renamed or deleted.
    */
    'isInbox'?: boolean;
    /**
    * Xero unique identifier for a folder  Files
    */
    'id'?: string;
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
