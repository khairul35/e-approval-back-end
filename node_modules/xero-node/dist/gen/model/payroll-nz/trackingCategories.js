"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackingCategories = void 0;
class TrackingCategories {
    static getAttributeTypeMap() {
        return TrackingCategories.attributeTypeMap;
    }
}
exports.TrackingCategories = TrackingCategories;
TrackingCategories.discriminator = undefined;
TrackingCategories.attributeTypeMap = [
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
        "name": "trackingCategories",
        "baseName": "trackingCategories",
        "type": "TrackingCategory"
    }
];
//# sourceMappingURL=trackingCategories.js.map