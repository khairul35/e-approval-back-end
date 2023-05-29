import { Pagination } from '././pagination';
import { PayRunCalendar } from '././payRunCalendar';
import { Problem } from '././problem';
export declare class PayRunCalendars {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'payRunCalendars'?: Array<PayRunCalendar>;
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
