import { injectable } from 'inversify';
import { Request, Response } from 'express';

@injectable()
export class DigController {

    async item(req: Request, res: Response) {

        res.json(['find']);
    }
}
