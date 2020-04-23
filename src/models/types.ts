import { Document } from 'mongoose';

export interface IMovie extends Document {
    name: string;
    year: string,
    genre: string[],
    rating: string,
    director: string,
    movieImage?: string
}