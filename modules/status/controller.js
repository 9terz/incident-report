let request = require('request');

// load config from .env
require('dotenv').config();

const key = process.env.TRELLO_KEY;
const token = process.env.TRELLO_TOKEN;
const boardId = process.env.TRELLO_BOARD_ID;

let GetLists = (callback) => {
  let url = `https://api.trello.com/1/boards/${boardId}/lists`;

  request({
    url: url,
    qs: { // qs = query string
      cards: 'open',
      card_fields: 'name,labels,desc',
      key: key,
      token: token
    },
    json: true
  }, function (error, response, body) {
    callback(error, body);
  });
}

module.exports = {
	GetLists: GetLists
};
