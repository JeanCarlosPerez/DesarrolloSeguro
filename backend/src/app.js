import express from 'express';
import morgan from 'morgan'
import pkg from '../package.json' assert { type: 'json' }
import authRoutes from './routes/auth.routes.js'
import blogRoutes from './routes/blog.routes.js'
import { createRoles } from './libs/initialSetup.js';
import userRouter from './routes/user.routes.js'
import cors from 'cors';

const app = express()
createRoles()
app.use(cors())
app.set('pkg', pkg)
app.use(morgan('dev'))
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
})

app.use('/auth', authRoutes)
app.use('/blog', blogRoutes)
app.use('/user', userRouter)

export default app;