import { LeaveType } from '././leaveType';
import { Pagination } from '././pagination';
import { Problem } from '././problem';
export declare class LeaveTypeObject {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'leaveType'?: LeaveType;
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
