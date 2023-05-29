"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsObject = void 0;
class SettingsObject {
    static getAttributeTypeMap() {
        return SettingsObject.attributeTypeMap;
    }
}
exports.SettingsObject = SettingsObject;
SettingsObject.discriminator = undefined;
SettingsObject.attributeTypeMap = [
    {
        "name": "settings",
        "baseName": "Settings",
        "type": "Settings"
    }
];
//# sourceMappingURL=settingsObject.js.map