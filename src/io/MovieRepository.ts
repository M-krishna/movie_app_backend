import { IMovieRepository } from '../services/MovieService';
import MovieModel from '../models/movies';
import { IMovie } from '../models/types';

export default class MovieRepository implements IMovieRepository {
    async getAllMovies(): Promise<IMovie[]> {
        let movieList: IMovie[];
        movieList = await MovieModel.find().select('_id name year genre rating director movieImage');
        return movieList;
    }

    async addMovie(data: IMovie): Promise<IMovie> {
        const { name, genre, year, rating, director, movieImage } = data;

        const newMovie = new MovieModel({
            name,
            year,
            genre,
            rating,
            director,
            movieImage
        });

        const result = await newMovie.save();
        return result;
    }

    async getMovieById(data: Record<string, any>): Promise<any> {
        const { movieId } = data;
        const movieData = await MovieModel.findById({ _id: movieId });
        if(!movieData){
            return {
                success: false,
                error: "Movie ID not found!",
                data: {}
            }
        }
        return {
            success: true,
            data: movieData
        };
    }

    async deleteMovieById(data: Record<string, any>): Promise<any> {
        const { movieId } = data;
        const result = await MovieModel.deleteOne({ _id: movieId })
        console.log(result);
        if (result.n == 0) {
            return { success: false, error: 'Movie ID not found!', data: {} };
        }
        return { success: true };
    }

    async deleteMovies(): Promise<any> {
        const result = await MovieModel.deleteMany({});
        return  {}
    }

    async updateMovie(data: IMovie): Promise<any> {
        const { _id, name, year, genre, rating, director } = data;
        const result = await MovieModel.findOneAndUpdate(
            { _id: _id},
            {$set: 
                {
                    "name": name, 
                    "year": year,
                    "genre": genre,
                    "rating": rating,
                    "director": director
                }
            }
        )
        if(!result){
            return { success: false, error: 'Movie ID not found!', data: {}}
        }
        return { success: true };
    }
}