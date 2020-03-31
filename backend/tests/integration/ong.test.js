import request from 'supertest';

import app from '../../src/app';
import connection from '../../src/database/connection';

describe('ONG', () => {

  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const response = await request(app)
    .post('/ongs')
    .send({
      name: 'GRAAC',
      email: 'contato@GRAAC.com',
      whatsapp: '11969758023',
      city: 'São paulo',
      uf: 'SP'
    })

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  })
})