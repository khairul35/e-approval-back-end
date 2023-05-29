"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceValidationErrorsElement = void 0;
class ResourceValidationErrorsElement {
    static getAttributeTypeMap() {
        return ResourceValidationErrorsElement.attributeTypeMap;
    }
}
exports.ResourceValidationErrorsElement = ResourceValidationErrorsElement;
ResourceValidationErrorsElement.discriminator = undefined;
ResourceValidationErrorsElement.attributeTypeMap = [
    {
        "name": "resourceName",
        "baseName": "resourceName",
        "type": "string"
    },
    {
        "name": "localisedMessage",
        "baseName": "localisedMessage",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "detail",
        "baseName": "detail",
        "type": "string"
    }
];
//# sourceMappingURL=resourceValidationErrorsElement.js.map