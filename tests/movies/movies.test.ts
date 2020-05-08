import request from 'supertest'
import { app } from '../../src/index'
import { expect } from 'chai'
import { API_PREFIX } from '../constants'

describe('Movies API', () => {
    
    it("Get all movies", async () => {
        const resp = await request(app)
            .get(`${API_PREFIX}/movies`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
        // const { success, error, data } = resp.body
        // expect(success).to.be.true
        // expect(error).to.be.empty
        // expect(data).to.be.an('array')
    })
})
