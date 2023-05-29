import { Pagination } from '././pagination';
import { PayRunCalendar } from '././payRunCalendar';
import { Problem } from '././problem';
export declare class PayRunCalendarObject {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'payRunCalendar'?: PayRunCalendar;
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
