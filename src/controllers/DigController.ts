import { injectable } from 'inversify';
import { Request, Response } from 'express';
import axios from 'axios';


@injectable()
export class DigController {

    async item(req: Request, res: Response) {
        res.json(req.body);
    }

    async itemForm(req: Request, res: Response) {
        const response = await axios.post('http://localhost:3000/dig/item', {'item': ["qwewqeqweq", "qwewqeqweq"]}, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        res.send(response.data);
    }
}
