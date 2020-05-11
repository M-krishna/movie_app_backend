import { Request, Response } from 'express';
import ExpressController from '../ExpressController';
import MovieService from '../../services/MovieService';

class MovieController extends ExpressController {
    public path = '/movies';
    public movieService: any;

    constructor(movieService: MovieService){
        super();
        this.movieService = movieService;
        this.mapRoutes();
    }

    protected mapRoutes() {
        this.router.get(this.path, this.getAllMovies);
        this.router.get(`${this.path}/search`, this.searchMovie);
        this.router.get(`${this.path}/:movieId`, this.getMovieById);
        this.router.post(this.path, this.addMovie);
        this.router.delete(`${this.path}/:movieId`, this.deleteMovieById);
        this.router.delete(this.path, this.deleteMovies);
        this.router.put(`${this.path}/:movieId`, this.updateMovie);
    }

    public getAllMovies = async (req: Request, res: Response) => {
        try {
            const { page } = req.query
            const data = { page }
            const result = await this.movieService.getMovies(data);
            this.json(res, result);
        } catch (err) {
            this.somethingWentWrong(res, err)
        }
    }

    public addMovie = (req: Request, res: Response) => {
        try {
            const { name, year, genre, rating, director, movieImage } = req.body;
            const data = {
                name,
                year,
                genre,
                rating,
                director,
                movieImage
            };
            const result = this.movieService.addMovies(data);
            this.json(res, result);
        } catch(err) {
            this.somethingWentWrong(res, err);
        }
    }

    public getMovieById = async (req: Request, res: Response) => {
        try {
            const { movieId } = req.params;
            const data = { movieId };
            const result = await this.movieService.getSingleMovie(data);
            if (!result.success) {
                this.notValidData(res, result)
            } else {
                this.json(res, result.data);
            }
        } catch (err) {
            this.somethingWentWrong(res, err);
        }
    }

    public deleteMovieById = async (req: Request, res: Response) => {
        try {
            const { movieId } = req.params;
            const data = { movieId };
            const result = await this.movieService.deleteSingleMovie(data);
            if(!result.success){
                this.notFound(res, result)
            } else {
                this.json(res, {});
            }
        } catch(err) {
            this.somethingWentWrong(res, err);
        }
    }

    public deleteMovies = async (req: Request, res: Response) => {
        try {
            const result = await this.movieService.deleteAllMovies();
            this.json(res, result);
        } catch (err) {
            this.somethingWentWrong(res, err);
        }
    }

    public updateMovie = async (req: Request, res: Response) => {
        try {
            const { name, year, genre, rating, director, trailer, relatedMovies } = req.body;
            const { movieId } = req.params; 
            const data = { _id: movieId, name, year, genre, rating, director, trailer, relatedMovies };
            const result = await this.movieService.updateAMovie(data);
            if (!result.success) {
                this.notFound(res, result)
            } else {
                this.json(res, {});
            }
        } catch (err) {
            this.somethingWentWrong(res, err);
        }
    }

    public searchMovie = async (req: Request, res: Response) => {
        try {
            const { name } = req.query
            const data = { name }
            const result = await this.movieService.movieSearch(data)
            this.json(res, result)
        } catch (err) {
            this.somethingWentWrong(res, err)
        }
    }
}

export default MovieController;