import { Request, Response } from 'express';
import { Router } from 'express';

import path from 'path';

const Routes = Router();

Routes.get('/', (req: Request, res: Response) => {
    return res.sendFile(path.resolve(__dirname, '..', '..', 'index.html')); 
});

export default Routes;