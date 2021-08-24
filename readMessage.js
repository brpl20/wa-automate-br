// function readMessage () {
//     content = {
//         "oi",
//         "oi, tudo bem?",
//     }
// }

let contentIN = {
  saudacoesManha: [
    "Bom dia!!!🙏🙏🙏",
    "Bom dia !! ",
    "Bom dia",
    "BOm dia Bruno!",
  ],

  saudacoesTarde: ["Boa Tarde", "Boa Tarde", "Boa Tarde."],

  saudacoesGerais: [
    "Oi, tudo beee?",
    "oi",
    "oi, tudo bem?",
    "opa",
    "opa, tudo bem?",
    "Buenas",
    "Buenas",
  ],

  dados: {
    email: ["Qual seu e-mail?", "Me passa seu e-mail", "Qual é seu e-mail"],
    banco: ["Dados Bancários", "Qual seu pix?"],
    endereço: [
      "Manda Localizaçao",
      "Qual o endereço?",
      "Me passa seu Endereço",
    ],
  },

  location: ["localiza-bruno"],
};

let contentOUT = {
  saudacoesManha: ["Bom dia!", "Bom dia, tudo bem e aí?"],
  saudacoesTarde: ["Boa tarde!", "Boa Tarde, tudo bem e aí?"],
  saudacoesNoite: ["Bom Noite!", "Boa Noite, tudo bem e aí?"],
  saudacoesGerais: ["Buenas!", "Opa, tudo na paz eae?"],
  dados: {
    email: ["adv5898@gmail.com"],
    banco: ["Sicredi ... "],
    endereço: ["Rua Paraná, 3033, Ed. Formato, 14 Andar"],
  },
  location: function localiza(message, client) {
    client.sendLocation(this.chat, lat, lng, loc);
  },
};

const awayMessage = {
  general:
    "No momento não estou online. Em caso de urgência ligue para (45) 99131-5898",
  madrugada:
    "Não estou disponível no momento, \n em caso de urgência criminal ligue para \n Lucas => \n Marcos => \n Alisson => ",
};

console.log(Object.keys(contentIN.saudacoesManha));

console.log(Object.keys(contentOUT.saudacoesManha));
