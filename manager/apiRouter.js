import express from 'express'
import { Router } from "express"
import { ManagerProduct, Product } from './managerProduct.js'

export const apiRouter = Router();
apiRouter.use(express.json())
apiRouter.use(express.urlencoded({extended: true}))

const admProduct = new ManagerProduct('./dataBase/ProductFile.json')

apiRouter.get('/products', async(req, res, next)=>{
    try {
        const products = await admProduct.getProduct()
        res.json(products)
    } catch (error) {
              next(error)
        //res.status(500).json({message: error.message})// Devuelve status de solicitud
    }
})

apiRouter.get('/products/:id', async(req, res, next)=>{
    try{
        const productos = await admProduct.getProductById(req.params.id)
        res.json(productos)
    }catch (error){
              next(error)
    }
})

apiRouter.post('/products', async (req, res, next)=>{//La información para agregar un nuevo producto se envia por formulario, esto se hace por una consulta ajax, es un metodo post
    try {
        const newProducts = await new Product(req.body)
        const addProducts = await admProduct.addProduct(newProducts)
        res.json(addProducts)
    } catch (error) {
              next(error)
    }
})
    

apiRouter.put('/products/:id', async (req, res, next)=>{
    try {
        const update = await admProduct.updateProduct(req.params.id,req.body)
        res.json(update)
    } catch (error) {
              next(error)
    }
    
})

apiRouter.delete('/products/:id', async (req, res, next)=>{
   try {
        const pid = parseInt(req.params.id)
        const deleteProduct = await admProduct.deleteProduct(pid)
        res.json(deleteProduct)
   } catch (error) {
          next(error)
   }
})
