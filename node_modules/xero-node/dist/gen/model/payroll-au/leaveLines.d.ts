import { LeaveLine } from '././leaveLine';
/**
* The leave type lines
*/
export declare class LeaveLines {
    'employee'?: Array<LeaveLine>;
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
