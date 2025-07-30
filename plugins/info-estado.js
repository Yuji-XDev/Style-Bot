import ws from 'ws'
let handler = async (m, { conn, usedPrefix, isRowner}) => {
let _uptime = process.uptime() * 1000;
let totalreg = Object.keys(global.db.data.users).length
let totalchats = Object.keys(global.db.data.chats).length

let uptime = clockString(_uptime);
let users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) 
const totalUsers = users.length;
let old = performance.now()
let neww = performance.now()
let speed = neww - old
const used = process.memoryUsage()
let info = `╭─❍〔 ⚙️ 𝐄𝐒𝐓𝐀𝐃𝐎 𝐒𝐈𝐒𝐓𝐄́𝐌𝐈𝐂𝐎 𝐃𝐄 𝐒𝐓𝐘𝐋𝐄 〕❍─╮
│
│ 🌟 *Creador:* ${etiqueta}
│ 🧩 *Prefijo:* [ ${usedPrefix} ]
│ 🎯 *Versión:* ${vs}
│
│ 🔒 *Privados:* ${chats.length - groupsIn.length}
│ 🧠 *Usuarios:* ${totalreg}
│ 🏘️ *Grupos:* ${groupsIn.length}
│ 📊 *Total de chats:* ${chats.length}
│
│ ⏱️ *Actividad:* ${uptime}
│ 🚀 *Velocidad:* ${(speed * 1000).toFixed(0) / 1000} seg
│ 🤖 *SubBots activos:* ${totalUsers || '0'}
│
╰─❍〔 ✦ 𝐒𝐓𝐘𝐋𝐄 𝐒𝐈𝐆𝐔𝐄 𝐄𝐍 𝐒𝐈𝐍𝐓𝐎𝐍𝐈́𝐀 ✦ 〕❍─╯`;
await conn.sendFile(m.chat, banner, 'estado.jpg', info, fkontak)
}
handler.help = ['estado']
handler.tags = ['info']
handler.command = ['estado', 'status', 'estate', 'state', 'stado', 'stats']
handler.register = true

export default handler

function clockString(ms) {
    let seconds = Math.floor((ms / 1000) % 60);
    let minutes = Math.floor((ms / (1000 * 60)) % 60);
    let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    return `${hours}h ${minutes}m ${seconds}s`;
}
