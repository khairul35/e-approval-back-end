import { Pagination } from '././pagination';
import { Project } from '././project';
export declare class Projects {
    'pagination'?: Pagination;
    'items'?: Array<Project>;
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
