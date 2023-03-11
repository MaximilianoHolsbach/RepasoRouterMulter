import express from 'express'
import { webrouter } from './routers/webRouter.js'
import { apiRouter } from './routers/apiRouter.js'

/**
 * Un mealware es una función que le podemos cargar a cualquier parte la aplicacion app.use(function(){})
 * o en el Router: apiRouter.use(function(){})
 * o en un endPoint: personasRouter.post('/',function(){}, (req, res)=>{res.json([])})
 * 
 * Los mealware inician con tres parametro req: peticion, res: respuest, next: callback que indica que esta todo bien
 * 
 * Los mealware indican el flujo  entran por la peticion req
 * 
 * Para que funcionen los pots necesito los mealwares, como los siguientes:
 app.use(express.json())
 app.use(express.urlencoded({extended: true}))
 * 
 * Las anteriores son solo necesarias en las rutas con post
 * 
 * Los mealware se cargan y se ejecutan en el orden en el que estan escritos
 * sdf
 */

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// mealware 
app.use('/api',apiRouter)
app.use((req, res, next)=>{
    console.log("entra peticion")
    next()
})
app.use(webrouter)
app.use((req, res, next)=>{// Esto se llaman controladores, y son mealwares, pueden ser pensados como funcion
    console.log("salio del webrouter y volvio al main ")
    next()
})
//app.use('/api',apiRouter)

app.listen(8080,()=>console.log("Server funcionando en el puerto 8080"))
