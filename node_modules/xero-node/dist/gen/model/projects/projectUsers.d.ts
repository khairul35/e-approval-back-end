import { Pagination } from '././pagination';
import { ProjectUser } from '././projectUser';
export declare class ProjectUsers {
    'pagination'?: Pagination;
    'items'?: Array<ProjectUser>;
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
