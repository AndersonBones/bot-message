import { FastifyInstance } from "fastify";
import { SendMessageProps } from "../interfaces/supplier";
import client from "../client";


export const my_routes = async (fastify: FastifyInstance)=>{

    fastify.get('/ping',async (req, reply)=>{
        reply.status(200).send({msg:"ping"})
    })


    fastify.post<{Body:SendMessageProps}>('/send-message',async (req, reply) => {
        try {
            const {message, phone} = req.body
            const phone_prefix = `55${phone}@c.us`

            await client.sendMessage(phone_prefix, message)

            reply.status(201).send({message, phone})
        } catch (error) {
            console.log(error)
            reply.status(400).send({msg:"error"})
        }
        
    })
}