import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

export const UserRoutes = router;

router.post('/save-email', UserControllers.saveEmail);

router.get('/', UserControllers.getAllUsers);
