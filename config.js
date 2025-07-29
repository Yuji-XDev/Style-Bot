import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.botNumber = ''

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.owner = [
// <-- Número @s.whatsapp.net -->
  ['5491176416825', '🎄 Propietario', true],
  ['51969214380', 'dev.Shadow', true],
  ['51919199620', 'shadow•core', true],
  
// <-- Número @lid -->
  ['118442900377727', '🎄 Propietario', true],
  ['193196806148194', 'dev.Shadow', true]
];

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.mods = []
global.suittag = ['5491176416825'] 
global.prems = []

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.libreria = 'Baileys'
global.baileys = 'V 6.7.17' 
global.vs = '2.2.5'
global.nameqr = '𖤐 𝐒𝐓𝐘𝐋𝐄 - 𝐁𝐎𝐓 𖤐'
global.namebot = '𝕊𝒕𝒚𝒍𝒆 𝔹𝒐𝒕'
global.sessions = 'Sessions'
global.jadi = 'JadiBots' 
global.shadowJadibts = true

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = '🎀 ⸸𝕊𝕥𝕪𝕝𝕖 𝔹𝕠𝕥 𝑴𝑫⸸ ⚜️'
global.botname = '✦⃟🖤 _𝑺𝑻𝒀𝑳𝑬⛧ 𝑩𝑶𝑻_ ⛓️┋⃟✧'
global.wm = '◟🕯️ 𝐒𝐭𝐲𝐥𝐞 𝐁𝐨𝐭 ◞'
global.author = '★彡[🌑 𝓜𝓪𝓭𝓮 𝓫𝔂 𝓢ʜᴀᴅᴏᴡ𝓬𝓸𝓻𝓮]彡★'
global.dev  = '୧𓆩 ★彡𝑻𝒉𝒆 𝑺𝒉𝒂𝒅𝒐𝒘`𝑪𝒐𝒓𝒆 彡★𓆪'
global.bot = '✞ 𝑺𝒕𝒚𝒍𝒆 𝑩𝒐𝒕 ✞'
global.club = '⚙️⋆⸸ꥈ🎮 𝖯𝗈𝗐𝖾𝗋𝖾𝖽 𝖻𝗒 𝖲𝗁⍺𝖽ᦅ𝗐′core 𝖢𝗅𝗎𝖻 🔱'
global.textbot = '⸸ 𝚂𝚃𝚈𝙻𝙴 𝙱𝙾𝚃 ⚙️ × 𝕊ℍ𝔸𝔻𝕆𝕎•ℂ𝕆ℝ𝔼 ⸸'
global.etiqueta = '@✦𝘴ʜᴀᴅᴏᴡ°ᴄᴏʀᴇ'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.moneda = 'llamas'
global.banner = 'https://files.catbox.moe/5spi6g.jpg'
global.avatar = 'https://files.catbox.moe/5spi6g.jpg'
global.logo = 'https://files.catbox.moe/5spi6g.jpg'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.gp1 = 'https://whatsapp.com/channel/0029VbAtbPA84OmJSLiHis2U'
global.comunidad1 = 'https://whatsapp.com/channel/0029VbAtbPA84OmJSLiHis2U'
global.channel = 'https://whatsapp.com/channel/0029VbAtbPA84OmJSLiHis2U'
global.channel2 = 'https://whatsapp.com/channel/0029VbAtbPA84OmJSLiHis2U'
global.md = 'https://github.com/Yuji-XDev/Style-Bot'
global.correo = 'sencillosnacional@gmail.com'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.catalogo = fs.readFileSync('./src/catalogo.jpg');
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: packname, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}
global.ch = {
ch1: '120363401008003732@newsletter',
}
global.multiplier = 60

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment   

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
