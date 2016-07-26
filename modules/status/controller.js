'use strict';
const key = '1b5489ecd4165274114c4d6e6f065bd2';
const token = '73fa82491178ef15a5d811343e85a24ecc2211be006c3a3919033de82762ac44';
let request = require('request');

let GetLists = (callback) => {
  request(`https://api.trello.com/1/boards/579586cda0940a6af42f302c/lists?cards=open&card_fields=name,labels,desc&key=`+key+`&token=`+token,function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
      let json = JSON.parse(body);
      console.log(json);
      callback(null, json);
    } else {
      console.error(error);
      callback(error);
    }
  });
}


module.exports = {
	GetLists: GetLists
};
