import { Request, Response } from 'express';
import ExpressController from '../ExpressController';
import AuthenticationService from '@services/AuthenticationService';

export default class AuthenticationController extends ExpressController {
    public path = '/auth'
    public authService: any

    constructor(authService: AuthenticationService){
        super()
        this.authService = authService
        this.mapRoutes()
    }

    protected mapRoutes () {
        this.router.post(`${this.path}/login`, this.login)
        this.router.post(`${this.path}/register`, this.signUp)
    }

    public login = async (req: Request, res: Response) => {
        try {
            const { username, password } = req.body
            const data = { username, password }
            const result = await this.authService.authenticate(data)
            if(!result.success){
                this.unauthorised(res, result)
            } else {
                this.json(res, {})
            }
        } catch (err) {
            this.somethingWentWrong(res, err)
        }
    }

    public signUp = async (req: Request, res: Response) => {
        try {
            const { username, password } = req.body
            const data = { username, password }
            const result = await this.authService.registerUser(data)
            if(!result.success){
                this.notValidData(res, result)
            } else {
                this.json(res, result.data)
            }
            
        } catch (err) {
            this.somethingWentWrong(res, err)
        }
    }
}