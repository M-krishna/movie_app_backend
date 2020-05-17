import request from 'supertest'
import { expect } from 'chai'

import { Server } from '../../src/server'
import { API_PREFIX } from '../constants'
import { movieData } from '../helpers'

const server = new Server()
const app = server.app

describe('Movies API', () => {
    
    it("Get all movies", async (done) => {
        const resp = await request(app)
            .get(`${API_PREFIX}/movies`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
        const { success, error, data } = resp.body
        expect(success).to.be.true
        expect(error).to.be.empty
        expect(data).to.be.an('array')
        done()
    })

    let movieID = ''
    it("Add a Movie" , async (done) => {
        const resp = await request(app)
            .post(`${API_PREFIX}/movies`)
            .send(movieData())
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
        const { success, error, data } = resp.body
        movieID = data._id
        expect(success).to.be.true
        expect(error).to.be.empty
        expect(data).to.be.an('object')
        done()
    })

    it("Get Movie by ID", async (done) => {
        const resp = await request(app)
            .get(`${API_PREFIX}/movies/${movieID}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
        const { success, error, data } = resp.body
        expect(success).to.be.true
        expect(error).to.be.empty
        expect(data).to.be.an('object')
        const { name, year, genre, director, movieImage } = data
        expect(name).to.be.string
        expect(year).to.be.string
        expect(genre).to.be.an('array')
        expect(director).to.be.string
        expect(movieImage).to.be.string
        done()
    })

    it("delete movie by ID", async (done) => {
        const resp = await request(app)
            .delete(`${API_PREFIX}/movies/${movieID}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
        const { success, error, data } = resp.body
        expect(success).to.be.true
        expect(error).to.be.empty
        expect(data).to.be.an('object')
        done()
    })

    it("deleting the same movie ID, should be not found", async (done) => {
        const resp = await request(app)
            .delete(`${API_PREFIX}/movies/${movieID}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404)
        const { success, error, data } = resp.body
        expect(success).to.be.false
        expect(error).to.be.string
        expect(data).to.be.an('object')
        done()
    })
})
