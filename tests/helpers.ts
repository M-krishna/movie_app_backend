import request from 'supertest'
import { app } from '../src'

import { API_PREFIX } from './constants'

export async function getMovies () {
    const URL = `${API_PREFIX}/movies`
    const { body } = await request(app).get(URL).set('Accept', 'application/json')
    return body.data
} 