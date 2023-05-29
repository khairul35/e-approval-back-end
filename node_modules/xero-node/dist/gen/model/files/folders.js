"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Folders = void 0;
class Folders {
    static getAttributeTypeMap() {
        return Folders.attributeTypeMap;
    }
}
exports.Folders = Folders;
Folders.discriminator = undefined;
Folders.attributeTypeMap = [
    {
        "name": "folders",
        "baseName": "Folders",
        "type": "Array<Folder>"
    }
];
//# sourceMappingURL=folders.js.map