import { IMovie } from '@models/types';

export interface IMovieRepository {
    getAllMovies(data: Record<string, any>): Promise<IMovie[]>;
    addMovie(data: IMovie): Promise<IMovie>;
    getMovieById(data: Record<string, any>): Promise<any>;
    deleteMovieById(data: Record<string, any>): Promise<any>;
    deleteMovies(): Promise<any>;
    updateMovie(data: IMovie): Promise<any>;
    searchMovie(data: IMovie): Promise<any>;
}

export default class MovieService {
    private movieRepository: IMovieRepository;

    constructor(movieRepository: IMovieRepository){
        this.movieRepository = movieRepository;
    }

    async getMovies(data: Record<string, any>): Promise<IMovie[]> {
        return this.movieRepository.getAllMovies(data);
    }

    async addMovies(data: IMovie): Promise<IMovie> {
        return await this.movieRepository.addMovie(data);
    }

    async getSingleMovie(data: Record<string, any>): Promise<any> {
        return this.movieRepository.getMovieById(data);
    }

    async deleteSingleMovie(data: Record<string, any>): Promise<any> {
        return this.movieRepository.deleteMovieById(data);
    }

    async deleteAllMovies(): Promise<any> {
        return this.movieRepository.deleteMovies();
    }

    async updateAMovie(data: IMovie): Promise<any> {
        return this.movieRepository.updateMovie(data);
    }

    async movieSearch(data: IMovie): Promise<any> {
        return this.movieRepository.searchMovie(data)
    }
}