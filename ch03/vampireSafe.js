
const request = require('request');

function main(args) {

    if(!args.lat || !args.lng) {
        return {
            error:'You must pass a lat and lng parameter.'
        };
    }

    //https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400
    return new Promise( (resolve, reject) => {

        request(url, (error, response, body) => {

            resolve({result:body});
            
        });

    });
}