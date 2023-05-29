"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = void 0;
class Action {
    static getAttributeTypeMap() {
        return Action.attributeTypeMap;
    }
}
exports.Action = Action;
Action.discriminator = undefined;
Action.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "Name",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "Status",
        "type": "Action.StatusEnum"
    }
];
(function (Action) {
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["ALLOWED"] = 'ALLOWED'] = "ALLOWED";
        StatusEnum[StatusEnum["NOTALLOWED"] = 'NOT-ALLOWED'] = "NOTALLOWED";
    })(StatusEnum = Action.StatusEnum || (Action.StatusEnum = {}));
})(Action = exports.Action || (exports.Action = {}));
//# sourceMappingURL=action.js.map