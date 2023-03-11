import { Router } from 'express'

export const webrouter = Router()

webrouter.use((req, res, next)=>{
    console.log("cargando webRouter")
    next()
})

webrouter.get('/productos', (req, res)=>{
    res.send("<h1>Mensaje de productos</h1>")
})

webrouter.get('/ventas', (req, res)=>{
    res.send("<h1>Mensaje de ventas</h1>")
})


