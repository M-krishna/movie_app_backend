import {
    MovieController,
    MovieRepository,
    MovieService,
    IMovieRepository,
    AuthenticationController,
    AuthenticationService,
    UserRepository
} from './index';

const movieRepository: IMovieRepository = new MovieRepository();
const movieService: MovieService = new MovieService(movieRepository);

const userRepository: UserRepository = new UserRepository();
const authenticationService: AuthenticationService = new AuthenticationService(userRepository);

const movieRoutes = [
    new MovieController(movieService),
    new AuthenticationController(authenticationService)
];

export default movieRoutes;