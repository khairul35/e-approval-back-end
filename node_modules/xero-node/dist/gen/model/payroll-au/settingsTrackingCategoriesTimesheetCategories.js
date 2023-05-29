"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsTrackingCategoriesTimesheetCategories = void 0;
/**
* The tracking category used for timesheets
*/
class SettingsTrackingCategoriesTimesheetCategories {
    static getAttributeTypeMap() {
        return SettingsTrackingCategoriesTimesheetCategories.attributeTypeMap;
    }
}
exports.SettingsTrackingCategoriesTimesheetCategories = SettingsTrackingCategoriesTimesheetCategories;
SettingsTrackingCategoriesTimesheetCategories.discriminator = undefined;
SettingsTrackingCategoriesTimesheetCategories.attributeTypeMap = [
    {
        "name": "trackingCategoryID",
        "baseName": "TrackingCategoryID",
        "type": "string"
    },
    {
        "name": "trackingCategoryName",
        "baseName": "TrackingCategoryName",
        "type": "string"
    }
];
//# sourceMappingURL=settingsTrackingCategoriesTimesheetCategories.js.map