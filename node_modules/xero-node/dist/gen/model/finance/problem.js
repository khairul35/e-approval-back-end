"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Problem = void 0;
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
        "type": "ProblemType"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "number"
    },
    {
        "name": "detail",
        "baseName": "detail",
        "type": "string"
    }
];
//# sourceMappingURL=problem.js.map