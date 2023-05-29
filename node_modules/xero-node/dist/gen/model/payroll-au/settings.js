"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Settings = void 0;
class Settings {
    static getAttributeTypeMap() {
        return Settings.attributeTypeMap;
    }
}
exports.Settings = Settings;
Settings.discriminator = undefined;
Settings.attributeTypeMap = [
    {
        "name": "accounts",
        "baseName": "Accounts",
        "type": "Array<Account>"
    },
    {
        "name": "trackingCategories",
        "baseName": "TrackingCategories",
        "type": "SettingsTrackingCategories"
    },
    {
        "name": "daysInPayrollYear",
        "baseName": "DaysInPayrollYear",
        "type": "number"
    },
    {
        "name": "employeesAreSTP2",
        "baseName": "EmployeesAreSTP2",
        "type": "boolean"
    }
];
//# sourceMappingURL=settings.js.map