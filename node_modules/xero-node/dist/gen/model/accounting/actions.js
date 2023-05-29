"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Actions = void 0;
class Actions {
    static getAttributeTypeMap() {
        return Actions.attributeTypeMap;
    }
}
exports.Actions = Actions;
Actions.discriminator = undefined;
Actions.attributeTypeMap = [
    {
        "name": "actions",
        "baseName": "Actions",
        "type": "Array<Action>"
    }
];
//# sourceMappingURL=actions.js.map