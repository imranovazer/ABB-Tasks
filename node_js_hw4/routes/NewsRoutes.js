import express from 'express'
import { createNew, deleteNew, editNew, getById, getNews } from '../controllers/NewsController.js';


const router = express.Router();



router.route('/').get(getNews).post(createNew);


router.route('/:id').get(getById).put(editNew).delete(deleteNew)


export default router