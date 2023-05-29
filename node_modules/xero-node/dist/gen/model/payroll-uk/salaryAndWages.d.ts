import { Pagination } from '././pagination';
import { Problem } from '././problem';
import { SalaryAndWage } from '././salaryAndWage';
export declare class SalaryAndWages {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'salaryAndWages'?: Array<SalaryAndWage>;
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
