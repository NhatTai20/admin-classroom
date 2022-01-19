"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("../controllers/users"));
const router = express_1.default.Router();
router.get('/getAllUser', users_1.default.getAllUsers);
router.get('/getUser/:id', users_1.default.getUserByID);
router.put('/edit/:id', users_1.default.ChangeStudentID);
router.put('/ban/:id', users_1.default.banUserByID);
module.exports = router;
