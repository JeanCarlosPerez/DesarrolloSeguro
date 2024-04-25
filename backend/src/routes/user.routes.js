import { Router } from "express";
import {getAllUser, getOneUser, createUser, deleteUser, updateUser} from '../controllers/userController.js'
import {verifyToken, isAdmin} from '../middlewares/authJwt.js'
import { checkRolesExisted } from "../middlewares/verifySignup.js";

const router = Router()

router.post('/', [verifyToken, isAdmin, checkRolesExisted], createUser)
router.get('/', getAllUser)
router.get('/:id', getOneUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router