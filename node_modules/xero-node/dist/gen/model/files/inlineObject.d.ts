export declare class InlineObject {
    'body'?: string;
    /**
    * exact name of the file you are uploading
    */
    'name'?: string;
    'filename'?: string;
    'mimeType'?: string;
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
