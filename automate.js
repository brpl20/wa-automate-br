const wa = require("@open-wa/wa-automate");

wa.create().then((client) => start(client));

function start(client) {
  client.onMessage(async (message) => {
    if (message.body === "Oi") {
      await client.sendText(message.from, "Oi!");
    }
  });

  client.onMessage(async (message) => {
    if (message.isGroupMsg) {
      await client.archiveChat(`${message.chatId}`, true);
    } else {
      console.log(message.chat);
    }
  });
}
