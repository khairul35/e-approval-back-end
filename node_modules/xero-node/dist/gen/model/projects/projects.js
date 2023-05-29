"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Projects = void 0;
class Projects {
    static getAttributeTypeMap() {
        return Projects.attributeTypeMap;
    }
}
exports.Projects = Projects;
Projects.discriminator = undefined;
Projects.attributeTypeMap = [
    {
        "name": "pagination",
        "baseName": "pagination",
        "type": "Pagination"
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<Project>"
    }
];
//# sourceMappingURL=projects.js.map