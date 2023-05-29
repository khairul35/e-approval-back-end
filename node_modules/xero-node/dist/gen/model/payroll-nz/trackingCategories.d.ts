import { Pagination } from '././pagination';
import { Problem } from '././problem';
import { TrackingCategory } from '././trackingCategory';
export declare class TrackingCategories {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'trackingCategories'?: TrackingCategory;
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
