const axios = require('axios');
const cheerio = require('cheerio');
const base_url = 'http://originbooks.herokuapp.com/';
axios.get(base_url).then(response=> {
  const $ = cheerio.load(response.data);
  const books = [];
  $('div.panel-default').each((i, elm) => {
    books.push( {
      title: elm.children[1].children[0].data.trim(),
      image: elm.children[3].children[1].attribs.src.trim(),
      author: elm.children[3].children[3].children[0].data.trim(),
      price: elm.children[3].children[5].children[0].data.trim()
    });
  });
  return books;
})
.then ( books=> {
  console.log(books);
});