import { injectable } from 'inversify';
import { Request, Response } from 'express';

@injectable()
export class MoveController {

    async to(req: Request, res: Response) {

        res.json(['to']);
    }
}
