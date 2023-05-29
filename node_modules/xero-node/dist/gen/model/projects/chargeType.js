"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargeType = void 0;
/**
* Can be `TIME`, `FIXED` or `NON_CHARGEABLE`, defines how the task will be charged. Use `TIME` when you want to charge per hour and `FIXED` to charge as a fixed amount. If the task will not be charged use `NON_CHARGEABLE`.
*/
var ChargeType;
(function (ChargeType) {
    ChargeType[ChargeType["TIME"] = 'TIME'] = "TIME";
    ChargeType[ChargeType["FIXED"] = 'FIXED'] = "FIXED";
    ChargeType[ChargeType["NONCHARGEABLE"] = 'NON_CHARGEABLE'] = "NONCHARGEABLE";
})(ChargeType = exports.ChargeType || (exports.ChargeType = {}));
//# sourceMappingURL=chargeType.js.map