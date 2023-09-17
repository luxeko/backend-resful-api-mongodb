import express from 'express'

const router = express.Router();

const initApiRoutes = (app: any) => {
    return app.use('/api', router);
}

export default initApiRoutes;