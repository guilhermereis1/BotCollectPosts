fs = require("fs");

const createObject = require("./createObject");

const createJsonFile = (title, desc, date, path) => {
  // Verifica se o arquivo "posts.json" existe se nao tiver, ele cria um
  if (!fs.existsSync(path)) {
    fs.writeFileSync("posts.json", "");
  }

  // Le o arquivo "posts.json" e pega os valores e joga na variável posts_registered
  var posts_registered = fs.readFileSync(path, "utf8");

  // Cria um array
  var objects = [];

  // Adiciona um post no array
  objects.push({ title: title, desc: desc, date: date });

  // Manda pra funçao os posts já registrados se existir, manda o post criado e passa o path
  createObject(posts_registered, objects, path);
};

module.exports = createJsonFile;
