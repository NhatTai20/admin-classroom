import express from 'express';
import controller from '../controllers/users';

const router = express.Router();

router.get('/getAllUser', controller.getAllUsers);
router.get('/getUser/:id', controller.getUserByID)
export = router;
