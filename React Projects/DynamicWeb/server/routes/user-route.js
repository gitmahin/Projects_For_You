import express from 'express'
import { loginUser, register, adminuser } from '../controller/user-controller.js'
import userAuthMiddleware from '../middlewares/userAuthMiddleware.js'


const router = express.Router()


router.route('/api/user-register').post(register)
router.route('/api/user-signin').post(loginUser)
router.route('/api/admin-user').get(userAuthMiddleware, adminuser) 

export default router