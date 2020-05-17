import request from 'supertest'
import * as faker from 'faker'

import { Server } from '../src/server'
const server = new Server()
const app = server.app

import { API_PREFIX } from './constants'

export async function getMovies () {
    const URL = `${API_PREFIX}/movies`
    const { body } = await request(app).get(URL).set('Accept', 'application/json')
    return body.data
}

export function movieData() {
    const genre = new Array(2).fill(null).map(e => e = faker.fake("{{name.title}}, {{name.title}}"))
    const data = {
        "name": faker.lorem.text(),
        "year": "2002",
        genre,
        "rating": "7.4",
        "director": faker.name.firstName(),
        "movieImage": faker.image.imageUrl()
    }
    return data
}