import { WAMessageStubType } from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return true;

  const getPais = (numero) => {
    const paisesPorPrefijo = {
      "1": "🇺🇸 Estados Unidos",
      "34": "🇪🇸 España",
      "52": "🇲🇽 México",
      "54": "🇦🇷 Argentina",
      "55": "🇧🇷 Brasil",
      "56": "🇨🇱 Chile",
      "57": "🇨🇴 Colombia",
      "58": "🇻🇪 Venezuela",
      "591": "🇧🇴 Bolivia",
      "593": "🇪🇨 Ecuador",
      "595": "🇵🇾 Paraguay",
      "598": "🇺🇾 Uruguay",
      "502": "🇬🇹 Guatemala",
      "503": "🇸🇻 El Salvador",
      "504": "🇭🇳 Honduras",
      "505": "🇳🇮 Nicaragua",
      "506": "🇨🇷 Costa Rica",
      "507": "🇵🇦 Panamá",
      "51": "🇵🇪 Perú",
      "53": "🇨🇺 Cuba",
      "91": "🇮🇳 India"
    };
    for (let i = 1; i <= 3; i++) {
      const prefijo = numero.slice(0, i);
      if (paisesPorPrefijo[prefijo]) return paisesPorPrefijo[prefijo];
    }
    return "🌎 Desconocido";
  };

  const numeroUsuario = m.messageStubParameters?.[0]?.split('@')[0];
  if (!numeroUsuario) return;
  const pais = getPais(numeroUsuario);

  const fecha = new Date().toLocaleDateString('es-PE', { timeZone: 'America/Lima' });
  const hora = new Date().toLocaleTimeString('es-PE', { timeZone: 'America/Lima' });

  const fkontak = {
    "key": {
      "participants": "0@s.whatsapp.net",
      "remoteJid": "status@broadcast",
      "fromMe": false,
      "id": "Halo"
    },
    "message": {
      "contactMessage": {
        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      }
    },
    "participant": "0@s.whatsapp.net"
  };

  let pp;
  try {
    pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image');
  } catch {
    pp = 'https://files.catbox.moe/04u4qi.jpg';
  }

  let img;
  try {
    img = await (await fetch(pp)).buffer();
  } catch {
    img = null;
  }

  const chat = global.db.data.chats[m.chat];
  const txt = `▧▧▧ 𝚆𝙴𝙻𝙲𝙾𝙼𝙴 :: SYSTEM ONLINE ▧▧▧`;
  const txt1 = `▧▧▧ 𝙎𝙃𝙐𝙏𝙏𝙄𝙉𝙂 𝘿𝙊𝙒𝙉 :: USER LEFT ▧▧▧`;
   
  let redes = ' https://gituh.com/Yuji-XDev';
  let groupSize = participants.length;
  if (m.messageStubType == WAMessageStubType.GROUP_PARTICIPANT_ADD) groupSize++;
  else if (
    m.messageStubType == WAMessageStubType.GROUP_PARTICIPANT_REMOVE ||
    m.messageStubType == WAMessageStubType.GROUP_PARTICIPANT_LEAVE
  ) groupSize--;

  if (chat?.welcome && m.messageStubType == 27) {
    let bienvenida = `
╭─❍🌺❖ 𝙃𝙤𝙡𝙖, 𝙃𝙤𝙡𝙖~ ❖🌺❍─╮
┃
┃ 💖 *Nᴇᴡ ᴍᴇᴍʙᴇʀ:* @${numeroUsuario}
┃ 🧸 *𝘾𝙤𝙣𝙚𝙘𝙩𝙖𝙙𝙤𝙨:* ${groupSize}
┃ 🌐 *𝙋𝙖𝙞́𝙨:* ${pais}
┃ 🕰️ *𝙁𝙚𝙘𝙝𝙖 & 𝙃𝙤𝙧𝙖:* ${fecha} • ${hora}
┃ 🏡 *𝙂𝙧𝙪𝙥𝙞𝙩𝙤:* ${groupMetadata.subject}
┃
╰───────๑ஓ๑───────╯

🎊 *¡𝙀𝙨 𝙪𝙣 𝙥𝙡𝙖𝙘𝙚𝙧 𝙧𝙚𝙘𝙞𝙗𝙞𝙧𝙩𝙚!*
🌸 Usa \`\`\`${usedPrefix}menu\`\`\` para descubrir todas las funciones 🍭`;

    await conn.sendMini(m.chat, txt, dev, bienvenida, img, img, redes, fkontak);
  }

  if (chat?.welcome && (m.messageStubType == 28 || m.messageStubType == 32)) {
    let bye = `╭══🎐༄ 𝘼𝘿𝙄𝙊́𝙎 𝙔 𝘽𝙐𝙀𝙉 𝙑𝙄𝘼𝙅𝙀 ༄🎐══╮
┃
┃ 🌪️ *𝘼𝙙𝙞𝙤́𝙨 𝙖:* @${numeroUsuario}
┃ 👣 *𝙌𝙪𝙚𝙙𝙖𝙢𝙤𝙨:* ${groupSize}
┃ 🧭 *𝙍𝙪𝙢𝙗𝙤:* ${pais}
┃ 📅 *𝘿𝙞́𝙖:* ${fecha}
┃ ⏰ *𝙃𝙤𝙧𝙖:* ${hora}
┃ 🏘️ *𝘿𝙚𝙨𝙙𝙚:* ${groupMetadata.subject}
┃
╰═══◉◉◉═════❖

🌌 *Cada adiós es un nuevo comienzo...*
📜 Usa \`\`\`${usedPrefix}menu\`\`\` para explorar el mundo del bot 🌟`;

    await conn.sendMini(m.chat, txt1, dev, bye, img, img, redes, fkontak);
  }
}