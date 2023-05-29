"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Journals = void 0;
class Journals {
    static getAttributeTypeMap() {
        return Journals.attributeTypeMap;
    }
}
exports.Journals = Journals;
Journals.discriminator = undefined;
Journals.attributeTypeMap = [
    {
        "name": "journals",
        "baseName": "Journals",
        "type": "Array<Journal>"
    }
];
//# sourceMappingURL=journals.js.map