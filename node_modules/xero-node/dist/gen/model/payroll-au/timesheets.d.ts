import { Timesheet } from '././timesheet';
export declare class Timesheets {
    'timesheets'?: Array<Timesheet>;
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
