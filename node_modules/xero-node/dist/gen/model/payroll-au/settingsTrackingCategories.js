"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsTrackingCategories = void 0;
/**
* Tracking categories for Employees and Timesheets
*/
class SettingsTrackingCategories {
    static getAttributeTypeMap() {
        return SettingsTrackingCategories.attributeTypeMap;
    }
}
exports.SettingsTrackingCategories = SettingsTrackingCategories;
SettingsTrackingCategories.discriminator = undefined;
SettingsTrackingCategories.attributeTypeMap = [
    {
        "name": "employeeGroups",
        "baseName": "EmployeeGroups",
        "type": "SettingsTrackingCategoriesEmployeeGroups"
    },
    {
        "name": "timesheetCategories",
        "baseName": "TimesheetCategories",
        "type": "SettingsTrackingCategoriesTimesheetCategories"
    }
];
//# sourceMappingURL=settingsTrackingCategories.js.map