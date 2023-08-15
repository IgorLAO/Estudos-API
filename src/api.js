import 'dotenv/config';
import cors from 'cors';
import express, { request, response } from 'express';

const server = express();

server.use(cors())
server.use(express.json())



server.get('/pong', async (request, response) => {
    response.send('aa')
})


server.get('/dobro/:numero', async (request, response) => {
    let numero = Number(request.params.numero)

    let dobro = numero * 2
    response.send({
        dobro: dobro
    })
})


server.get('/multipli', (request, response) => {
    let v1 = Number(request.query.v1)
    let v2 = Number(request.query.v2)

    let x = v1 * v2

    response.send({
        mult: x
    })
})

server.get('/media', (request, response) => {
    let aluno = request.query.aluno
    let nota1 = Number(request.query.nota1)
    let nota2 = Number(request.query.nota2)
    let nota3 = Number(request.query.nota3)

    let media = (nota1 + nota2 + nota3) / 3

    response.send({
        aluno: aluno,
        media: media
    })
})

server.post('/soma', (request, response) => {
    let a = request.body.a
    let b = request.body.b

    let x = a + b

    response.send({
        soma: x
    })
})

server.post('/media', (request, response) => {
    let nota1 = request.body.nota1
    let nota2 = request.body.nota2
    let nota3 = request.body.nota3

    let x = (nota1 + nota2 + nota3) / 3

    response.send({
        media: x
    })
})





server.listen(process.env.PORT, console.log(`
        A API ESTA NA PORTA ${process.env.PORT}
    `))