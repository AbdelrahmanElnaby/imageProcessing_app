import supertest from 'supertest'
import app from '../index'

const request = supertest(app)
describe('validating the parameters of the link', (): void => {
  it(`testing  valid height and width 
    with status code 200`, async (): Promise<void> => {
    try {
      const response = await request.get(
        '/api?height=300&width=200&address=fjord.jpg'
      )
      expect(response.status).toEqual(200)
    } catch (error) {
      console.log(error)
    }
  })

  it(`testing Not valid height and width 
    with status code 400`, async (): Promise<void> => {
    try {
      const response = await request.get(
        '/api?height=300&width=ss&address=fjord.jpg'
      )
      expect(response.status).toEqual(400)
    } catch (error) {
      console.log(error)
    }
  })

  it(`testing Not valid image file extention
    with status code 200`, async (): Promise<void> => {
    try {
      const response = await request.get(
        '/api?height=300&width=200&address=img1'
      )
      expect(response.status).toEqual(400)
    } catch (error) {
      console.log(error)
    }
  })
})
