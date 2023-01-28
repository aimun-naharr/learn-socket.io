import express from 'express'
import http from 'http'
import {Server} from 'socket.io'
import cors from 'cors'

const app=express()
app.use(cors())
const server=http.createServer(app)
const io=new Server(server, {
    cors:{
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
})
io.on('connection', (socket)=>{
// console.log(`user connected ${socket.id}`)
socket.on('send_msg', (data)=>{
    console.log(data)
})
})
server.listen(8000, ()=>{
    console.log('server is running')
})