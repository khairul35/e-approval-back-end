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
        "name": "pagination",
        "baseName": "pagination",
        "type": "Pagination"
    },
    {
        "name": "problem",
        "baseName": "problem",
        "type": "Problem"
    },
    {
        "name": "settings",
        "baseName": "settings",
        "type": "Accounts"
    }
];
//# sourceMappingURL=settings.js.map