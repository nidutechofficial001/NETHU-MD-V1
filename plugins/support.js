const config = require('../config')

const {cmd , commands} = require('../command')



cmd({

    pattern: "support",

    desc: "To get the bot informations.",

    react: "⛓",

    category: "main",

    filename: __filename

},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{



let about = ` *👋 Hello ${pushname}*

*🧚NIDU-MD Support Channels🧚*

*Youtube Channel Link:*https://youtube.com/channel/UCKr5dJTwNc4LMAvhUuYvSNQ

*Whatsapp Channel Link:*https://whatsapp.com/channel/0029VaGHW65Jpe8loieBnt2W

*©𝗡𝗜𝗗𝗨-𝗠𝗗💜 𝗖𝗿𝗲𝗮𝘁𝗲𝗱 𝗕𝗬 𝗡𝗶𝗱𝘂𝘀𝗵𝗮𝗻ッ*`

return await conn.sendMessage(from,{image: {url:`https://i.ibb.co/XLbkDd4/IMG-20240913-WA0048.jpg`},caption:about},{quoted: mek})

}catch(e){

console.log(e)

reply(`${e}`)

}

})
