"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectUsers = void 0;
class ProjectUsers {
    static getAttributeTypeMap() {
        return ProjectUsers.attributeTypeMap;
    }
}
exports.ProjectUsers = ProjectUsers;
ProjectUsers.discriminator = undefined;
ProjectUsers.attributeTypeMap = [
    {
        "name": "pagination",
        "baseName": "pagination",
        "type": "Pagination"
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<ProjectUser>"
    }
];
//# sourceMappingURL=projectUsers.js.map