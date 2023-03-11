import { Router } from "express"

export const personasRouter = Router()

personasRouter.get('/',(req,res,next)=>{// Esto se llaman controladores, y son mealwares, pueden ser pensados como funcion
    console.log('esta en el api/personas')
    next()
} ,(req, res)=>{res.json([])})
personasRouter.post('/',(req, res)=>{res.json([])})
personasRouter.put('/', (req, res)=>{res.json([])})
personasRouter.delete('/', (req, res)=>{res.json([])})
