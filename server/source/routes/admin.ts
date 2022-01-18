import express from 'express';
import controller from '../controllers/admin';

const router = express.Router();

router.get('/getAllAdmin', controller.getAllAdmin);
router.get('/getAdmin/:id', controller.getAdminByID);
router.post('/create', controller.createAdmin);
router.post('/login', controller.login);
export = router;
