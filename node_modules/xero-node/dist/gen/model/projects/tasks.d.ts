import { Pagination } from '././pagination';
import { Task } from '././task';
export declare class Tasks {
    'pagination'?: Pagination;
    'items'?: Array<Task>;
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
