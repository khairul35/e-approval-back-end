import { Asset } from '././asset';
import { Pagination } from '././pagination';
export declare class Assets {
    'pagination'?: Pagination;
    'items'?: Array<Asset>;
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
