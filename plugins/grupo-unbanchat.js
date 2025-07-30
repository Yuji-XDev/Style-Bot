let handler = async (m, { conn, usedPrefix, command, args }) => {
  let chat = global.db.data.chats[m.chat]

  if (!(m.chat in global.db.data.chats)) {
    return conn.reply(m.chat, `✧ *𝐄𝐒𝐓𝐄 𝐓𝐄𝐑𝐑𝐄𝐍𝐎 𝐓𝐎𝐃𝐀𝐕𝐈́𝐀 𝐍𝐎 𝐇𝐀 𝐒𝐄𝐍𝐓𝐈𝐃𝐎 𝐄𝐋 𝐄𝐒𝐓𝐈𝐋𝐎 𝐃𝐄 𝐒𝐓𝐘𝐋𝐄...*`, m)
  }

  if (command === 'bot') {
    if (args.length === 0) {
      const estado = chat.isBanned ? '✘ 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐃𝐎' : '✔ 𝐀𝐂𝐓𝐈𝐕𝐎'
      const info = `╭─❍〔 🧬 𝐂𝐎𝐍𝐅𝐈𝐆𝐔𝐑𝐀𝐂𝐈𝐎́𝐍 𝐃𝐄 𝐒𝐓𝐘𝐋𝐄 〕❍─╮
│   
│ 🎨 *𝐒𝐨𝐥𝐨 𝐥𝐨𝐬 𝐚𝐝𝐦𝐢𝐧𝐬 𝐞𝐥𝐢𝐠𝐞𝐧 𝐞𝐥 𝐫𝐢𝐭𝐦𝐨 𝐝𝐞 𝐥𝐚 𝐞𝐬𝐜𝐞𝐧𝐚.*
│
┣━━ ⪻ 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 ⪼ ━━⬤
│ ☀️ ${usedPrefix}bot on ➤ *𝐀𝐜𝐭𝐢𝐯𝐚𝐫 𝐞𝐬𝐭𝐢𝐥𝐨 𝐝𝐢𝐧𝐚́𝐦𝐢𝐜𝐨*
│ 🌙 ${usedPrefix}bot off ➤ *𝐒𝐢𝐥𝐞𝐧𝐜𝐢𝐨 𝐜𝐫𝐞𝐚𝐭𝐢𝐯𝐨*
│
┣━━ ⪻ 𝐄𝐒𝐓𝐀𝐃𝐎 ⪼ ━━⬤
│ 🪐 𝐒𝐭𝐲𝐥𝐞 ➤ ${estado}
│
╰─❍〔 𝐋𝐀 𝐄𝐒𝐓𝐄́𝐓𝐈𝐂𝐀 𝐓𝐀𝐌𝐁𝐈𝐄́𝐍 𝐄𝐒 𝐏𝐎𝐃𝐄𝐑 〕❍─╯`
      return conn.reply(m.chat, info, fkontak, rcanal)
    }

    if (args[0] === 'off') {
      if (chat.isBanned) {
        return conn.reply(m.chat, `🌒 *𝐒𝐓𝐘𝐋𝐄 𝐘𝐀 𝐒𝐄 𝐄𝐍𝐂𝐔𝐄𝐍𝐓𝐑𝐀 𝐄𝐍 𝐑𝐄𝐏𝐎𝐒𝐎. 𝐍𝐎 𝐇𝐀𝐘 𝐍𝐀𝐃𝐀 𝐌𝐀𝐒 𝐐𝐔𝐄 𝐀𝐏𝐀𝐆𝐀𝐑.*`, m, fake)
      }
      chat.isBanned = true
      return conn.reply(m.chat, `🕯️ *𝐋𝐀 𝐄𝐒𝐄𝐍𝐂𝐈𝐀 𝐃𝐄 𝐒𝐓𝐘𝐋𝐄 𝐒𝐄 𝐃𝐈𝐒𝐈𝐏𝐀 𝐄𝐍 𝐋𝐀 𝐎𝐒𝐂𝐔𝐑𝐈𝐃𝐀𝐃... 𝐄𝐒𝐓𝐄 𝐂𝐇𝐀𝐓 𝐐𝐔𝐄𝐃𝐀 𝐄𝐍 𝐒𝐈𝐋𝐄𝐍𝐂𝐈𝐎.*`, m, fake)
    } else if (args[0] === 'on') {
      if (!chat.isBanned) {
        return conn.reply(m.chat, `🔓 *𝐒𝐓𝐘𝐋𝐄 𝐘𝐀 𝐄𝐒𝐓Á 𝐋𝐈𝐁𝐄𝐑𝐀𝐍𝐃𝐎 𝐒𝐔 𝐈𝐍𝐒𝐏𝐈𝐑𝐀𝐂𝐈𝐎́𝐍 𝐄𝐍 𝐄𝐒𝐓𝐄 𝐋𝐔𝐆𝐀𝐑.*`, m, fake)
      }
      chat.isBanned = false
      return conn.reply(m.chat, `🌟 *𝐒𝐓𝐘𝐋𝐄 𝐑𝐄𝐆𝐑𝐄𝐒𝐀 𝐂𝐎𝐍 𝐋𝐔𝐙, 𝐕𝐈𝐒𝐈𝐎́𝐍 𝐘 𝐃𝐎𝐌𝐈𝐍𝐈𝐎. 𝐄𝐋 𝐃𝐈𝐒𝐄𝐍̃𝐎 𝐓𝐎𝐌𝐀 𝐄𝐋 𝐌𝐀𝐍𝐃𝐎.*`, m, fake)
    }
  }
}

handler.help = ['bot']
handler.tags = ['grupo']
handler.command = ['bot']
handler.admin = true

export default handler