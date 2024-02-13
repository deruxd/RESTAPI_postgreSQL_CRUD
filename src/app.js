import express from 'express';
import routerTask from './routers/tasks.routes.js';

const app = express();

app.use(express.json());

app.use(routerTask);

export default app;