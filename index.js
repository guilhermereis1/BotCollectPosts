const cheerio = require("cheerio");
const request = require("request-promise");
const createJsonFile = require("./createJsonFile");
fs = require("fs");

const base_url = "https://flaviocopes.com/tags/node";

request(base_url, function (err, res, body) {
  if (err) console.log("Erro: ", +err);

  var $ = cheerio.load(body);

  $(".post-list li").each(function () {
    // Pega o Titulo, Descriçao e Data
    var title = $(this).find("li a h4").text().trim();
    var desc = $(this).find("p").text().trim();
    var date = $(this).find(".date-tag time").text().trim();

    // Joga os valores no module -> createJsonFile
    createJsonFile(title, desc, date, "posts.json");
  });

  console.log(
    `${
      JSON.parse(fs.readFileSync("posts.json", "utf8")).length
    } Posts no total!`
  );
});
