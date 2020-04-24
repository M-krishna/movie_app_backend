import { Response, Router } from 'express';

export default abstract class ExpressController {
    protected abstract path: string;
    public router = Router();
    protected abstract mapRoutes(): void

    public json(res: Response, data: any): void {
        res.status(200).json({
            success: true,
            error: '',
            data: data
        })
    }

    public notValidData(res: Response, message: string): void {
        res.status(400).json(message)
    }

    public notFound(res: Response, message: string): void {
        res.status(404).json(message)
    }

    public unauthorised(res: Response, message: string): void {
        res.status(401).json(message)
    }

    public somethingWentWrong(res: Response, err: string): void {
        res.status(500).json({
            success: false,
            error: 'Something went wrong',
            data: {},
            traceback: String(err)
        })
    }
}