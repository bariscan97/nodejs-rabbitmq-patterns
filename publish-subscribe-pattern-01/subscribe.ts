import { Connection, connect, Channel,Replies,Options} from 'amqplib'


export async function Subscribe() : Promise<void> {

    try{
        const conn : Connection  = await connect("amqp://localhost")
        const channel : Channel = await conn.createChannel()
        const exchangename = 'logs';

        const e : Replies.AssertExchange = await channel.assertExchange(exchangename, 'fanout', {durable: false})
        const q : Replies.AssertQueue =  await channel.assertQueue("deneme")
        
        const c = await channel.bindQueue(q.queue,e.exchange,"")
        channel.consume(q.queue , (msg : any)=>{
            console.log(" [x] %s", JSON.parse(msg.content.toString()));
        },{noAck:true})    

    }catch(err){
        throw new Error(err)
    }
    
} 

Subscribe()