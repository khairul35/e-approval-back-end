import { Benefit } from '././benefit';
import { Pagination } from '././pagination';
import { Problem } from '././problem';
export declare class SuperannuationObject {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'benefit'?: Benefit;
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
