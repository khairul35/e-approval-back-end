import { EarningsTemplate } from '././earningsTemplate';
export declare class EmployeePayTemplate {
    /**
    * Unique identifier for the employee
    */
    'employeeID'?: string;
    'earningTemplates'?: Array<EarningsTemplate>;
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
