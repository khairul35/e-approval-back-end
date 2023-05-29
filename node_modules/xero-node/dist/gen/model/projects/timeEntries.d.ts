import { Pagination } from '././pagination';
import { TimeEntry } from '././timeEntry';
export declare class TimeEntries {
    'pagination'?: Pagination;
    'items'?: Array<TimeEntry>;
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
