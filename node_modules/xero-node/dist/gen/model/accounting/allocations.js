"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Allocations = void 0;
class Allocations {
    static getAttributeTypeMap() {
        return Allocations.attributeTypeMap;
    }
}
exports.Allocations = Allocations;
Allocations.discriminator = undefined;
Allocations.attributeTypeMap = [
    {
        "name": "allocations",
        "baseName": "Allocations",
        "type": "Array<Allocation>"
    }
];
//# sourceMappingURL=allocations.js.map