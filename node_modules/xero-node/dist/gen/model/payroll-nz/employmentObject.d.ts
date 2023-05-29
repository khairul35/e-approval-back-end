import { Employment } from '././employment';
import { Pagination } from '././pagination';
import { Problem } from '././problem';
export declare class EmploymentObject {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'employment'?: Employment;
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
