import fetch from 'node-fetch';

const handler = async (m, { isOwner, isAdmin, conn, text, participants, args, command, usedPrefix }) => {
  if (usedPrefix.toLowerCase() === 'a') return;

  const customEmoji = global.db.data.chats[m.chat]?.customEmoji || '🌑';
  await m.react(customEmoji);

  if (!(isAdmin || isOwner)) {
    global.dfail?.('admin', m, conn);
    throw false;
  }

  const mensaje = args.length ? args.join(' ') : '⚠️ *No se proporcionó mensaje.*';
  const grupo = await conn.getName(m.chat);

  let textoFinal = [
    `╭──〔 𓆩 📣 𝐌𝐄𝐍𝐒𝐀𝐉𝐄 𝐆𝐄𝐍𝐄𝐑𝐀𝐋 𓆪 〕──╮`,
    `│`,
    `│🌐 *Grupo:* ${grupo}`,
    `│🧿 *Miembros:* ${participants.length}`,
    `│🗯️ *Mensaje:*`,
    `│   ${mensaje}`,
    `│`,
    `│⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯`,
    `│ ⚠️ 𝐍𝐨𝐭𝐢𝐟𝐢𝐜𝐚𝐜𝐢𝐨́𝐧 𝐚:` 
  ];

  for (const user of participants) {
    textoFinal.push(`│ ✦ @${user.id.split('@')[0]}`);
  }

  textoFinal.push(
    `│`,
    `╰⊰━━━━━━━━━━━━━⊱⬣`,
    `𓆩 𝐒𝐓𝐘𝐋𝐄 𝐁𝐎𝐓 — 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐓𝐇𝐄 𝐒𝐇𝐀𝐃𝐎𝐖 𝐂𝐎𝐑𝐄 𓆪`
  );

  await conn.sendMessage(m.chat, {
    text: textoFinal.join('\n'),
    mentions: participants.map(p => p.id),
    contextInfo: {
      mentionedJid: participants.map(p => p.id),
      externalAdReply: {
        title: '✧ 𝐈𝐍𝐕𝐎𝐂𝐀𝐍𝐃𝐎 𝐋𝐀𝐒 𝐒𝐎𝐌𝐁𝐑𝐀𝐒 ✧',
        body: club,
        thumbnailUrl: logo,
        mediaType: 1,
        showAdAttribution: true,
        renderLargerThumbnail: true,
        sourceUrl: 'https://whatsapp.com/channel/0029VbAtbPA84OmJSLiHis2U',
      }
    }
  }, { quoted: fkontak });
};

handler.help = ['todos *<mensaje>*'];
handler.tags = ['grupo'];
handler.command = ['todos', 'invocar', 'tagall', 'marcar'];
handler.admin = true;
handler.group = true;

export default handler;