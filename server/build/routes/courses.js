"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const courses_1 = __importDefault(require("../controllers/courses"));
const router = express_1.default.Router();
router.get('/getAllCourses', courses_1.default.getAllCourses);
router.get('/getCourse/:id', courses_1.default.getCourseByID);
module.exports = router;
