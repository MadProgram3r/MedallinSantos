const { Router } = require("express");
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

const authRouter = Router()
dotenv.config()

const SECRET_KEY = 'YuremamaIsMyGf'

authRouter
    .use('/auth', verifyToken)
    .get('/', (req,res)=>{
        res.json({message:'Ruta principal'})
    })
    .post('/login', async (req,res)=>{
        const {user,password} = req.body;
        console.log(user);

        if (user == 'admin' && password == '1234') {
            return res.status(200).json({
                token: jwt.sign({user: 'admin'}, SECRET_KEY)
            })
        }
        return res.status(401).json({message:'User invalid'})
    })
    .get('/auth/privado', async (req,res) =>{
        return res.status(200).json({message:'Datos privados'})
    })

async function verifyToken(req, res, next){
    if (!req.headers.authorization) {
        return res.status(401).json({error:"No autorizado"})
    }

    const token = req.headers.authorization.split(' ')[1];
    console.log(token);
    
    try {
        jwt.verify(token, SECRET_KEY, (err)=>{
            if (err) {
                return res.json({messageError:""})
            }else{
                next()
            }
        })
    } catch (error) {
        console.log(error)
    }
}
module.exports = authRouter