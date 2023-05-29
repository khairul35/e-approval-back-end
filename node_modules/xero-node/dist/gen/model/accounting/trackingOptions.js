"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackingOptions = void 0;
class TrackingOptions {
    static getAttributeTypeMap() {
        return TrackingOptions.attributeTypeMap;
    }
}
exports.TrackingOptions = TrackingOptions;
TrackingOptions.discriminator = undefined;
TrackingOptions.attributeTypeMap = [
    {
        "name": "options",
        "baseName": "Options",
        "type": "Array<TrackingOption>"
    }
];
//# sourceMappingURL=trackingOptions.js.map