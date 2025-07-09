import { injectable } from 'inversify';
import { Request, Response } from 'express';
import axios from 'axios';


@injectable()
export class DigController {

    async item(req: Request, res: Response) {
        res.json(req.body);
    }

    async itemTest(req: Request, res: Response) {
        const response = await axios.post('http://localhost:3000/dig/item', {'item': ["oak_log"]}, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        res.send(response.data);
    }
}
