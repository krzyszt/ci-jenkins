var supertest = require('supertest');
var server = require('../server.js');

describe('GET /', function(){
	it('respond with Continuous Integration with Jenkins',function(done){
		supertest(server).get('/').expect('Continuous Integration with Jenkins', done);
	});
});