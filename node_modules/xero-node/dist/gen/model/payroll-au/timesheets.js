"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timesheets = void 0;
class Timesheets {
    static getAttributeTypeMap() {
        return Timesheets.attributeTypeMap;
    }
}
exports.Timesheets = Timesheets;
Timesheets.discriminator = undefined;
Timesheets.attributeTypeMap = [
    {
        "name": "timesheets",
        "baseName": "Timesheets",
        "type": "Array<Timesheet>"
    }
];
//# sourceMappingURL=timesheets.js.map