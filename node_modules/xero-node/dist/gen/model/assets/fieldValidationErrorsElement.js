"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldValidationErrorsElement = void 0;
class FieldValidationErrorsElement {
    static getAttributeTypeMap() {
        return FieldValidationErrorsElement.attributeTypeMap;
    }
}
exports.FieldValidationErrorsElement = FieldValidationErrorsElement;
FieldValidationErrorsElement.discriminator = undefined;
FieldValidationErrorsElement.attributeTypeMap = [
    {
        "name": "fieldName",
        "baseName": "fieldName",
        "type": "string"
    },
    {
        "name": "valueProvided",
        "baseName": "valueProvided",
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
//# sourceMappingURL=fieldValidationErrorsElement.js.map