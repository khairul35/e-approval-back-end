export declare class Attachment {
    /**
    * Unique ID for the file
    */
    'attachmentID'?: string;
    /**
    * Name of the file
    */
    'fileName'?: string;
    /**
    * URL to the file on xero.com
    */
    'url'?: string;
    /**
    * Type of file
    */
    'mimeType'?: string;
    /**
    * Length of the file content
    */
    'contentLength'?: number;
    /**
    * Include the file with the online invoice
    */
    'includeOnline'?: boolean;
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
