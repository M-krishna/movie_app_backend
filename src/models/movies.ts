import mongoose, { Schema } from 'mongoose';

import { IMovie } from './types';

const MovieSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    genre: {
        type: [String],
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    movieImage: {
        type: String,
        required: true
    }
})

export default mongoose.model<IMovie>('Movie', MovieSchema);