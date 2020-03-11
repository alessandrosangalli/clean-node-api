import request from 'supertest'
import app from '../config/app'

describe('Content Type Middleware', () => {
  test('Should default content type as json', async () => {
    app.get('/test-content-type', (req, res) => {
      res.send()
    })

    await request(app)
      .get('/test-content-type')
      .expect('content-type', /json/)
  })

  test('Should return xml content type when forced', async () => {
    app.get('/test-content-type_xml', (req, res) => {
      res.type('xml')
      res.send()
    })

    await request(app)
      .get('/test-content-type_xml')
      .expect('content-type', /xml/)
  })
})
