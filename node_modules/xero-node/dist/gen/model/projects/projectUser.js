"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectUser = void 0;
class ProjectUser {
    static getAttributeTypeMap() {
        return ProjectUser.attributeTypeMap;
    }
}
exports.ProjectUser = ProjectUser;
ProjectUser.discriminator = undefined;
ProjectUser.attributeTypeMap = [
    {
        "name": "userId",
        "baseName": "userId",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    }
];
//# sourceMappingURL=projectUser.js.map