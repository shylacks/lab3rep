const expect = require('chai').expect
const chai = require('chai');
const server = require('../index.js');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('index.js', () => {​​
  it('should be ok', () => {​​
    chai.request(server)
    .get('/endpoint')
    .end(function (err, res) {​​
       expect(err).to.be.null;
       expect(res).to.have.status(200);
    }​​);
  }​​)
}​​)