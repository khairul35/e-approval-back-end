"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelError = void 0;
class ModelError {
    static getAttributeTypeMap() {
        return ModelError.attributeTypeMap;
    }
}
exports.ModelError = ModelError;
ModelError.discriminator = undefined;
ModelError.attributeTypeMap = [
    {
        "name": "resourceValidationErrors",
        "baseName": "resourceValidationErrors",
        "type": "Array<ResourceValidationErrorsElement>"
    },
    {
        "name": "fieldValidationErrors",
        "baseName": "fieldValidationErrors",
        "type": "Array<FieldValidationErrorsElement>"
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
//# sourceMappingURL=modelError.js.map