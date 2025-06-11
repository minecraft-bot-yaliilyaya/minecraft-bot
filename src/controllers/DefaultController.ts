import { injectable } from 'inversify';
import { Request, Response } from 'express';

@injectable()
export class DefaultController {
    async mainPage(req: Request, res: Response) {
        res.json(['mainPage']);
    }
}
