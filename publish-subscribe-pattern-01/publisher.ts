import {Rabbitmqservice} from "../PublisherService/PublisherService"

export async function Publisher() : Promise<void> {

    console.log(process.argv.slice(2).join(' '))
    const Publisher = new Rabbitmqservice()
    await Publisher.publishInExchange({
        name:"logs",
        type:"fanout",
        options:{durable:false}},
        "",
        JSON.stringify({
        message : process.argv.slice(2).join(' ') || "Test Message"
    }))

} 
Publisher()