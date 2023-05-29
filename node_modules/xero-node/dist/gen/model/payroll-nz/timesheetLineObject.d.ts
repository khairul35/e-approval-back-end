import { Pagination } from '././pagination';
import { Problem } from '././problem';
import { TimesheetLine } from '././timesheetLine';
export declare class TimesheetLineObject {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'timesheetLine'?: TimesheetLine;
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
