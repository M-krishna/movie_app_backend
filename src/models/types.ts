import { Document } from 'mongoose';

export interface IUser extends Document {
    username: string;
    password: string;
    generateHash(password: string): string;
    validPassword(password: string): boolean;
}

export interface IMovie extends Document {
    name: string;
    year: string,
    genre: string[],
    rating: string,
    director: string,
    movieImage?: string
}