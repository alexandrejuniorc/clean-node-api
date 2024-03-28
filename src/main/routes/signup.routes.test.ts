import request from 'supertest'
import { app } from '../config/app'

describe('SignUp Routes', () => {
  it('should return account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'any_name',
        email: 'any_mail@mail.com',
        password: 'any_password'
      })
      .expect(200)
  })
})
