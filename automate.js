const wa = require("@open-wa/wa-automate");
const fs = require("fs");

let rawdata = fs.readFileSync("responses.json");
let responses = JSON.parse(rawdata);

const found = responses.saudacoesManha.find((element) => "Bom dia" === element);
console.log(found);

// message  = mensagem recebida
// arr      = array para comparar
function checkResponse(message, arr) {
  const found = arr.find((element) => message === element);
  return found;
}

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
