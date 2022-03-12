let expect  = require('chai').expect;
let request = require('request');

it('Hello World', (done) => {
    request('http://localhost:3000/api/helloWorld' , function(error, response, body) {
        let json = JSON.parse(body);
        const msg = json.msg
        expect(msg).to.equal('Hello World!');
        done();
    });
});

it('Customer', (done) => {
    request('http://localhost:3000/api/helloWorld' , function(error, response, body) {
        let json = JSON.parse(body);
        const customer = json.customer
        expect(customer).to.equal('Opsera');
        done();
    });
});