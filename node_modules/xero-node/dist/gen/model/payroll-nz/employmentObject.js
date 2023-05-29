"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmploymentObject = void 0;
class EmploymentObject {
    static getAttributeTypeMap() {
        return EmploymentObject.attributeTypeMap;
    }
}
exports.EmploymentObject = EmploymentObject;
EmploymentObject.discriminator = undefined;
EmploymentObject.attributeTypeMap = [
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
        "name": "employment",
        "baseName": "employment",
        "type": "Employment"
    }
];
//# sourceMappingURL=employmentObject.js.map