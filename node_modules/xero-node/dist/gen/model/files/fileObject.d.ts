import { User } from '././user';
export declare class FileObject {
    /**
    * File Name
    */
    'name'?: string;
    /**
    * MimeType of the file (image/png, image/jpeg, application/pdf, etc..)
    */
    'mimeType'?: string;
    /**
    * Numeric value in bytes
    */
    'size'?: number;
    /**
    * Created date in UTC
    */
    'createdDateUtc'?: string;
    /**
    * Updated date in UTC
    */
    'updatedDateUtc'?: string;
    'user'?: User;
    /**
    * File object\'s UUID
    */
    'id'?: string;
    /**
    * Folder relation object\'s UUID
    */
    'folderId'?: string;
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
