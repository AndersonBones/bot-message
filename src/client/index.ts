import { Client, LocalAuth } from "whatsapp-web.js";
import qrcode from 'qrcode-terminal'



const client = new Client({
    authStrategy: new LocalAuth({
        clientId:"asdasdas8d"
    })
});


client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('message',async (msg)=>{
    try {
        if(msg.from != "status@broadcast"){
            const contact = await msg.getContact()
            console.log(contact, msg.body)
        }
    } catch (error) {
        console.log(error)
    }
})


export default client