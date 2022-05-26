let expect  = require('chai').expect;
let request = require('request');
let hostname = process.env.TEST_HOST || 'localhost';
let port = process.env.TEST_PORT || 3000;

it('Hello World', (done) => {
    request('http://' + hostname + ':' + port + '/api/javascript' , function(error, response, body) {
        let json = JSON.parse(body);
        const msg = json.msg
        expect(msg).to.equal('Hello World!');
        done();
    });
});

it('Customer', (done) => {
    request('http://' + hostname + ':' + port + '/api/javascript' , function(error, response, body) {
        let json = JSON.parse(body);
        const language = json.language
        expect(language).to.equal('NodeJS');
        done();
    });
});