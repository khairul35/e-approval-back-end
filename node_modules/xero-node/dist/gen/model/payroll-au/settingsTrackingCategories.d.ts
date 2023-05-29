import { SettingsTrackingCategoriesEmployeeGroups } from '././settingsTrackingCategoriesEmployeeGroups';
import { SettingsTrackingCategoriesTimesheetCategories } from '././settingsTrackingCategoriesTimesheetCategories';
/**
* Tracking categories for Employees and Timesheets
*/
export declare class SettingsTrackingCategories {
    'employeeGroups'?: SettingsTrackingCategoriesEmployeeGroups;
    'timesheetCategories'?: SettingsTrackingCategoriesTimesheetCategories;
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
