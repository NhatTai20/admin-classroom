import express from 'express';
import controller from '../controllers/users';

const router = express.Router();

router.get('/getAllUser', controller.getAllUsers);
router.get('/getUser/:id', controller.getUserByID);
router.put('/edit/:id', controller.ChangeStudentID);
router.put('/ban/:id', controller.banUserByID)
export = router;
