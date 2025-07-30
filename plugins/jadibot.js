import ws from 'ws';

let handler = async (m, { conn }) => {

  const connsActivas = global.conns.filter(conn =>
    conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED
  );
  
  const _muptime = process.uptime() * 1000
  const uptime = clockString(_muptime)

  const vistos = new Set();
  const subbotsUnicos = connsActivas.filter(conn => {
    const jid = conn.user?.jid;
    if (vistos.has(jid)) return false;
    vistos.add(jid);
    return true;
  });

  function convertirMsADiasHorasMinutosSegundos(ms) {
    let segundos = Math.floor(ms / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);
    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    let resultado = '';
    if (dias) resultado += `${dias} 𝐝𝐢́𝐚𝐬, `;
    if (horas) resultado += `${horas} 𝐡𝐨𝐫𝐚𝐬, `;
    if (minutos) resultado += `${minutos} 𝐦𝐢𝐧𝐮𝐭𝐨𝐬, `;
    if (segundos) resultado += `${segundos} 𝐬𝐞𝐠𝐮𝐧𝐝𝐨𝐬`;
    return resultado.trim();
  }

  const totalSubs = subbotsUnicos.length;

  const lista = subbotsUnicos.map((bot, i) => {
    return `╭─〔 🔹 𝙎𝙤𝙘𝙠𝙚𝙩 #${i + 1} 〕─╮
│👤 *Usuario:* ${bot.user?.name || 'SUBBOT STYLE'}
│🌐 *Link:* wa.me/${(bot.user?.jid || '').replace(/[^0-9]/g, '')}
│⏱️ *En línea:* ${bot.uptime ? convertirMsADiasHorasMinutosSegundos(Date.now() - bot.uptime) : '𝘿𝙚𝙨𝙘𝙤𝙣𝙤𝙘𝙞𝙙𝙤'}
╰───────────────────────╯`;
  }).join('\n\n');

  const textoSubbots = totalSubs === 0
    ? '⚠️ *No hay Sub-Bots activos por ahora.*\n🌙 *Usa el panel para conectar tus instancias.*'
    : `╭─〔 🌟 𝙎𝙏𝙔𝙇𝙀 𝘽𝙊𝙏 𝙎𝙊𝘾𝙆𝙀𝙏𝙎 🌟 〕─╮
│⏳ *Tiempo activo:* ${uptime}
│🔌 *Sockets conectados:* ${totalSubs}
╰────────────────────────────╯

✦ 𝐒𝐔𝐁𝐁𝐎𝐓𝐒 𝐀𝐂𝐓𝐈𝐕𝐎𝐒 ✦

${lista}

𓆩 𝐒𝐓𝐘𝐋𝐄 𝐁𝐎𝐓 𓆪`;

  await conn.sendMessage(m.chat, {
    contextInfo: {
      externalAdReply: {
        title: `🔌 𝙎𝙐𝘽𝘽𝙊𝙏𝙎 𝘾𝙊𝙉𝙀𝘾𝙏𝘼𝘿𝙊𝙎`,
        body: `🌟 STYLE BOT SYSTEM`,
        thumbnailUrl: 'https://files.catbox.moe/5spi6g.jpg',
        sourceUrl: 'https://github.com/Yuji-XDev/Style-Bot',
        mediaType: 1,
        renderLargerThumbnail: true,
        showAdAttribution: false
      }
    },
    text: textoSubbots
  }, { quoted: fkontak });
};

handler.command = ['sockets', 'bots', 'socket'];
handler.tags = ['jadibot'];
handler.help = ['sockets'];

export default handler;

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':');
}