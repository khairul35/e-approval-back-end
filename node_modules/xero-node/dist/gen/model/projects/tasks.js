"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tasks = void 0;
class Tasks {
    static getAttributeTypeMap() {
        return Tasks.attributeTypeMap;
    }
}
exports.Tasks = Tasks;
Tasks.discriminator = undefined;
Tasks.attributeTypeMap = [
    {
        "name": "pagination",
        "baseName": "pagination",
        "type": "Pagination"
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<Task>"
    }
];
//# sourceMappingURL=tasks.js.map