import express, { Router } from 'express'

export const webrouter = Router()

webrouter.get('/products', async(req, res)=>{
    res.send('<h1>holsa</h1>')
})
webrouter.get('/ventas', async(req, res)=>{
})