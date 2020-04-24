import { IUser } from '../models/types'
import { IUserRepository } from '../services/AuthenticationService'
import UserModel from '../models/user'

export default class UserRepository implements IUserRepository {
    async signUp(data: IUser): Promise<any> {
        const { username, password } = data
        // First Need to check if username already exist or not.
        const isUserThere = await UserModel.findOne({ username: username })
        if(isUserThere){
            return { success: false, error: 'Username already exist!', data: {} }
        }
        const newUser = new UserModel({
            username
        })
        newUser.password = newUser.generateHash(password)
        const result = await newUser.save()
        return { success: true, data: result }
    }

    async login(data: IUser): Promise<any> {
        const { username, password } = data
        const result = await UserModel.findOne({ username: username })
        if(!result || !result.validPassword(password)){
            return { success: false, error: 'Invalid Username/Password', data: {} }
        }
        return { success: true }
    }
}