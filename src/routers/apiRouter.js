import express from 'express'
import { Router } from 'express'
import { personasRouter } from './personas.js'
import { ventasRouter } from './ventas.js'
export const apiRouter = Router()
//Con los siguientes mealware podemos leer la información de los post
apiRouter.use(express.json())
apiRouter.use(express.urlencoded({extended: true}))

apiRouter.use('/personas',personasRouter)
apiRouter.use('/ventas',ventasRouter)









