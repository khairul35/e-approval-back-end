import { EmployeeStatutoryLeaveSummary } from '././employeeStatutoryLeaveSummary';
import { Pagination } from '././pagination';
import { Problem } from '././problem';
export declare class EmployeeStatutoryLeavesSummaries {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'statutoryLeaves'?: Array<EmployeeStatutoryLeaveSummary>;
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
