"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const admin_1 = __importDefault(require("../controllers/admin"));
const router = express_1.default.Router();
router.get('/getAllAdmin', admin_1.default.getAllAdmin);
router.get('/getAdmin/:id', admin_1.default.getAdminByID);
router.post('/create', admin_1.default.createAdmin);
router.post('/login', admin_1.default.login);
module.exports = router;
