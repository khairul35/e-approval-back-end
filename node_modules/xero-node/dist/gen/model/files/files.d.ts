import { FileObject } from '././fileObject';
export declare class Files {
    'totalCount'?: number;
    'page'?: number;
    'perPage'?: number;
    'items'?: Array<FileObject>;
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
