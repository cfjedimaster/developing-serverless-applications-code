/*
I request a JSON object.
*/
const request = require('request');

function main(args) {

    let url = 'https://www.raymondcamden.com/jsonfeed/index.json';

    return new Promise( (resolve, reject) => {

        request({url:url, json:true}, (error, response, body) => {

            console.log(body);

            resolve({latestblog:body.items[0]});
            
        });

    });
}