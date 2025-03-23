const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);
const { expect } = chai;

describe('API Error Handling Tests', () => {
  it('should return 404 for invalid routes', (done) => {
    chai.request(app)
      .get('/api/nonexistent-route')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.have.property('error', 'Not Found');
        done();
      });
  });
});


