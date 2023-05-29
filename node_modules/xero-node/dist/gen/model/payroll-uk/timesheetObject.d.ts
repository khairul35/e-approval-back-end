import { Pagination } from '././pagination';
import { Problem } from '././problem';
import { Timesheet } from '././timesheet';
export declare class TimesheetObject {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'timesheet'?: Timesheet;
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
