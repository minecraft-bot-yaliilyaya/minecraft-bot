import { injectable } from 'inversify';
import { Request, Response } from 'express';

@injectable()
export class FindController {

    async item(req: Request, res: Response) {


        res.json(['find']);
    }
}
