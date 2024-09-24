

import fastify from "fastify";
import { my_routes } from './routes/routes';
import client from "./client";


const server = fastify()

client.initialize()

server.register(my_routes, {prefix:"/api"})

server.listen({port: 3333}, (err, address)=>{
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})




