export declare class Pagination {
    'page'?: number;
    'pageSize'?: number;
    'pageCount'?: number;
    'itemCount'?: number;
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
