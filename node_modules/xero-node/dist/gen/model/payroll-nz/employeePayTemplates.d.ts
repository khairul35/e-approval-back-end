import { EmployeePayTemplate } from '././employeePayTemplate';
import { Pagination } from '././pagination';
import { Problem } from '././problem';
export declare class EmployeePayTemplates {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'payTemplate'?: EmployeePayTemplate;
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
