import express from 'express'
import { getTime } from '../controllers/timeController.js'

const router = express.Router()

router.get('/now', getTime)

export default router
