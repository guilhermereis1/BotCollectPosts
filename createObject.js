fs = require("fs");

const createObject = (posts_registered, objects, path) => {
  // Verifica se o posts_registered está vazio
  if (posts_registered !== "") {
    // Adiciona os novos posts aos antigos posts
    const newObj = [...JSON.parse(posts_registered), ...objects];

    try {
      // Salva os posts
      fs.writeFileSync(path, JSON.stringify(newObj));
    } catch (err) {
      console.error(err);
    }
  } else {
    try {
      // Salva os posts
      fs.writeFileSync(path, JSON.stringify(objects));
    } catch (err) {
      console.error(err);
    }
  }
};

module.exports = createObject;
