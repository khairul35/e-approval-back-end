"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedConnections = void 0;
class FeedConnections {
    static getAttributeTypeMap() {
        return FeedConnections.attributeTypeMap;
    }
}
exports.FeedConnections = FeedConnections;
FeedConnections.discriminator = undefined;
FeedConnections.attributeTypeMap = [
    {
        "name": "pagination",
        "baseName": "pagination",
        "type": "Pagination"
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<FeedConnection>"
    }
];
//# sourceMappingURL=feedConnections.js.map