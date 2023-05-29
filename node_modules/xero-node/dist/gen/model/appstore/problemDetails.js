"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProblemDetails = void 0;
class ProblemDetails {
    static getAttributeTypeMap() {
        return ProblemDetails.attributeTypeMap;
    }
}
exports.ProblemDetails = ProblemDetails;
ProblemDetails.discriminator = undefined;
ProblemDetails.attributeTypeMap = [
    {
        "name": "detail",
        "baseName": "detail",
        "type": "string"
    },
    {
        "name": "extensions",
        "baseName": "extensions",
        "type": "object"
    },
    {
        "name": "instance",
        "baseName": "instance",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "number"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
//# sourceMappingURL=problemDetails.js.map