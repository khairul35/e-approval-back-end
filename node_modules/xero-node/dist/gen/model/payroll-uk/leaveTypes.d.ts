import { LeaveType } from '././leaveType';
import { Pagination } from '././pagination';
import { Problem } from '././problem';
export declare class LeaveTypes {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'leaveTypes'?: Array<LeaveType>;
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
