"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserSchema = void 0;
const zod_1 = require("zod");
exports.createUserSchema = zod_1.z.object({
    name: zod_1.z.string(),
    age: zod_1.z.number(),
    email: zod_1.z.string()
});
//# sourceMappingURL=user-type.js.map