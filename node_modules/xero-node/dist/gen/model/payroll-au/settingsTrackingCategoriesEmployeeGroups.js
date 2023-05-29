"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsTrackingCategoriesEmployeeGroups = void 0;
/**
* The tracking category used for employees
*/
class SettingsTrackingCategoriesEmployeeGroups {
    static getAttributeTypeMap() {
        return SettingsTrackingCategoriesEmployeeGroups.attributeTypeMap;
    }
}
exports.SettingsTrackingCategoriesEmployeeGroups = SettingsTrackingCategoriesEmployeeGroups;
SettingsTrackingCategoriesEmployeeGroups.discriminator = undefined;
SettingsTrackingCategoriesEmployeeGroups.attributeTypeMap = [
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
//# sourceMappingURL=settingsTrackingCategoriesEmployeeGroups.js.map