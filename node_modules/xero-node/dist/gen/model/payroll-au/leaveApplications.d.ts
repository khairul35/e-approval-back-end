import { LeaveApplication } from '././leaveApplication';
export declare class LeaveApplications {
    'leaveApplications'?: Array<LeaveApplication>;
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
