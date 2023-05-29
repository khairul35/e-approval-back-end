import { Pagination } from '././pagination';
import { Statement } from '././statement';
export declare class Statements {
    'pagination'?: Pagination;
    'items'?: Array<Statement>;
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
