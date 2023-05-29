"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Problem = void 0;
/**
* The object returned for a bad request
*/
class Problem {
    static getAttributeTypeMap() {
        return Problem.attributeTypeMap;
    }
}
exports.Problem = Problem;
Problem.discriminator = undefined;
Problem.attributeTypeMap = [
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
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "detail",
        "baseName": "detail",
        "type": "string"
    },
    {
        "name": "instance",
        "baseName": "instance",
        "type": "string"
    },
    {
        "name": "invalidFields",
        "baseName": "invalidFields",
        "type": "Array<InvalidField>"
    }
];
//# sourceMappingURL=problem.js.map