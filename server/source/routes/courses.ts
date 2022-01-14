import express from 'express';
import controller from '../controllers/courses';

const router = express.Router();

router.get('/getAllCourses', controller.getAllCourses);
router.get('/getCourse/:id', controller.getCourseByID)
export = router;
