import {Rabbitmqservice} from "../PublisherService/PublisherService"

export async function Producer() : Promise<void> {
    console.log(process.argv.slice(2).join(' '))
    const Publisher = new Rabbitmqservice()
    await Publisher.publichInQueue("deneme",JSON.stringify({
        message : process.argv.slice(2).join(' ') || "Test Message"
    }))

} 
Producer()

