const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);
const { expect } = chai;

describe('Order API Tests', () => {
  it('should GET all orders successfully', (done) => {
    chai.request(app)
      .get('/api/orders')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        expect(res.body[0]).to.have.property('item', 'Laptop');
        done();
      });
  });
});


