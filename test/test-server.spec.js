process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var mongoose = require("mongoose");

var server = require('../app');
var User = require("../models/user");

var should = chai.should();
chai.use(chaiHttp);

describe('Users', () => {
  
  beforeEach((done) => {
    let newUser = new User({
      username : 'shravan512',
      password: 'kumar512'
    })
    newUser.save((err)=>{
        done()
    })
  });
  
  it('should return success msg from / route (GET) ', (done) => {
    chai.request(server)
        .get('/api/')
        .end((err,res)=>{
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.have.property('status');
            res.body.should.have.property('msg')
            done();
        })
  });
  
  it('should return all user on /api/user (GET)', (done) => {
    chai.request(server)
        .get('/api/user')
        .end((err,res)=>{
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('array')
          res.body[0].should.have.property('_id')
          res.body[0].should.have.property('username')
          res.body[0].should.have.property('password')
          done()
        })
  });

  it('should check login route /api/login (POST)', (done) => {
    chai.request(server)
        .post('/api/login')
        .send({'username':'shravan','password':'kumar'})
        .end((err,res)=>{
          res.should.have.status(200)
          res.should.be.json
          res.body.should.be.a('object')
          res.body.should.have.property('msg')
          res.body.should.have.property('isvalid')
          done()
        })
  });


  it('should update a user details on /api/user/<id> (PUT)', (done) => {
    chai.request(server)
      .get('/api/user')
      .end((err,res)=>{
        chai.request(server)
        .put('/api/user/'+res.body[0]._id)
        .send({'username':'shravan','password':'kumar'})
        .end((err,resp)=>{
          resp.should.have.status(200)
          resp.should.be.json
          resp.body.should.be.a('object')
          resp.body.should.have.property('_id')
          resp.body.should.have.property('username')
          resp.body.should.have.property('password')
          done()
      })
      
    })
  });
  it('should delete a user details on /api/delete/<id> (DELETE)', (done) => {
    chai.request(server)
      .get('/api/user')
      .end((err,res)=>{
        chai.request(server)
        .delete('/api/delete/'+res.body[0]._id)
        .end((err,resp)=>{
          resp.should.have.status(200)
          resp.should.be.json
          resp.body.should.be.a('object')
          resp.body.should.have.property('msg')
          done()
      })
      
    })
  });
});








/*

//sample test cases...
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('my suite', () => {
  it('my test', () => {
    assert.ok(true);
  });
});

describe('Browser and nodejs', () => {
  it('is present on chai', () => {
    //expect(chai).to.respondsTo('request');
  });

});


*/