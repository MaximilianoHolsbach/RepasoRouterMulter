import express from 'express'
import{apiRouter} from './apiRouter.js'
import multer from 'multer'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './static/images')
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({storage})

const app = express()

app.use('/',express.static('./static'))// Si llamamos al local host sin extension busca el index

app.use('/images',express.static('./static/images'))//es un middlware para detectar si la peticion coincide con la ruta de un archivo 

app.use(apiRouter)

app.post('/archivo',upload.single('archivo'),(req,res,next)=>{
    res.json(req.file)
})

/* Este middlware tiene un parametro mas, que es el error, que ademas de llegar la peticion,
 La respuesta y el next, llega el parametro que se envio primero por el next */

app.use((error, req, res, next)=>{
    switch(error.message){
        case  `El ID no es valido`:
            res.status(404)
            break
        case 'Falta un argumento':
            res.status(400)
        default:
            res.status(500)
    }
    res.json({ message: error.message})
})

app.listen(8080,()=>console.log("MarnagerProduct funcionando en el puerto 8080"))


