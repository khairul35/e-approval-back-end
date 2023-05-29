"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = void 0;
class ValidationError {
    static getAttributeTypeMap() {
        return ValidationError.attributeTypeMap;
    }
}
exports.ValidationError = ValidationError;
ValidationError.discriminator = undefined;
ValidationError.attributeTypeMap = [
    {
        "name": "message",
        "baseName": "Message",
        "type": "string"
    }
];
//# sourceMappingURL=validationError.js.map