import express from 'express'
const app = express()


app.get('/main', (req,res)=>{
    res.send({})
})