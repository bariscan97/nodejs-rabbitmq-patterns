import {Rabbitmqservice} from "../PublisherService/PublisherService"
import { Connection, connect, Channel,Replies,Options} from 'amqplib'

export async function Consumer() : Promise<void> {

    try{
        const conn : Connection  = await connect("amqp://localhost")
        const channel : Channel = await conn.createChannel()
       
        const q : Replies.AssertQueue =  await channel.assertQueue("deneme")
        
        channel.consume(q.queue , (msg : any)=>{
            console.log(" [x] %s", JSON.parse(msg.content.toString()));
        },{noAck:true})    

    }catch(err){
        throw new Error(err)
    }

} 
Consumer()
