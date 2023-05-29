import { Account } from '././account';
import { SettingsTrackingCategories } from '././settingsTrackingCategories';
export declare class Settings {
    /**
    * Payroll Account details for SuperExpense, SuperLiabilty, WagesExpense, PAYGLiability & WagesPayable.
    */
    'accounts'?: Array<Account>;
    'trackingCategories'?: SettingsTrackingCategories;
    /**
    * Number of days in the Payroll year
    */
    'daysInPayrollYear'?: number;
    /**
    * Indicates if the organisation has been enabled for STP Phase 2 editing of employees.
    */
    'employeesAreSTP2'?: boolean;
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
