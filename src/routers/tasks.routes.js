import {Router} from 'express';
import { deleteTasks, getAlltasks, getItasks, patchTasks, postTasks } from '../controllers/tasks.controllers.js';


const routerTask = Router();

routerTask.get('/tasks', getAlltasks );

routerTask.get('/tasks/:id',getItasks);

routerTask.post('/tasks', postTasks);

routerTask.patch('/tasks/:id',patchTasks);

routerTask.delete('/tasks/:id',deleteTasks);

export default routerTask;
