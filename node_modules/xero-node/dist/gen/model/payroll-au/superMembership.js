"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperMembership = void 0;
class SuperMembership {
    static getAttributeTypeMap() {
        return SuperMembership.attributeTypeMap;
    }
}
exports.SuperMembership = SuperMembership;
SuperMembership.discriminator = undefined;
SuperMembership.attributeTypeMap = [
    {
        "name": "superMembershipID",
        "baseName": "SuperMembershipID",
        "type": "string"
    },
    {
        "name": "superFundID",
        "baseName": "SuperFundID",
        "type": "string"
    },
    {
        "name": "employeeNumber",
        "baseName": "EmployeeNumber",
        "type": "string"
    }
];
//# sourceMappingURL=superMembership.js.map