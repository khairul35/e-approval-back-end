import { FeedConnection } from '././feedConnection';
import { Pagination } from '././pagination';
export declare class FeedConnections {
    'pagination'?: Pagination;
    'items'?: Array<FeedConnection>;
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
