import express from 'express';
import controller from '../controllers/courses';

const router = express.Router();

router.get('/get/courses', controller.getAllCourses);

export = router;
