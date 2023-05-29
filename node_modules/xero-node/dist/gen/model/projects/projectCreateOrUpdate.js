"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectCreateOrUpdate = void 0;
class ProjectCreateOrUpdate {
    static getAttributeTypeMap() {
        return ProjectCreateOrUpdate.attributeTypeMap;
    }
}
exports.ProjectCreateOrUpdate = ProjectCreateOrUpdate;
ProjectCreateOrUpdate.discriminator = undefined;
ProjectCreateOrUpdate.attributeTypeMap = [
    {
        "name": "contactId",
        "baseName": "contactId",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "estimateAmount",
        "baseName": "estimateAmount",
        "type": "number"
    },
    {
        "name": "deadlineUtc",
        "baseName": "deadlineUtc",
        "type": "Date"
    }
];
//# sourceMappingURL=projectCreateOrUpdate.js.map