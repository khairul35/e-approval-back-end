import { Benefit } from '././benefit';
import { Pagination } from '././pagination';
import { Problem } from '././problem';
export declare class Superannuations {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'benefits'?: Array<Benefit>;
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
