import express from 'express'
import { webrouter } from './routers/webRouter.js'
import { apiRouter } from './routers/apiRouter.js'
const app = express()



app.use(webrouter)

app.use(apiRouter)

app.listen(8080,()=>console.log("Server funcionando en el puerto 8080"))
