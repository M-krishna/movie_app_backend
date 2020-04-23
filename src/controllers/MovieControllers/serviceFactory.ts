import {
    MovieController,
    MovieRepository,
    MovieService,
    IMovieRepository
} from './index';

const movieRepository: IMovieRepository = new MovieRepository();
const movieService: MovieService = new MovieService(movieRepository);

const movieRoutes = [
    new MovieController(movieService)
];

export default movieRoutes;