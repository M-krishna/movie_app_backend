import { IUser } from '@models/types'

export interface IUserRepository {
    login(data: IUser): Promise<any>;
    signUp(data: IUser): Promise<any>;
}

export default class AuthenticationService {
    private userRepository: any

    constructor(userRepository: IUserRepository){
        this.userRepository = userRepository
    }

    async registerUser(data: IUser): Promise<any> {
        return await this.userRepository.signUp(data)
    }

    async authenticate(data: IUser): Promise<any> {
        return await this.userRepository.login(data)
    }
}