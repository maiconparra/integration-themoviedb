import { Request, Response } from 'express';
import { Router } from 'express';

import path from 'path';

//Controller's
import DicoverMoviesCotroller from '../api-controllers/discover-movies.controllers';

const Routes = Router();

const dicoverMoviesCotroller: DicoverMoviesCotroller = new DicoverMoviesCotroller;

Routes.get('/', (req: Request, res: Response) => {
    return res.sendFile(path.resolve(__dirname, '..', '..', 'index.html')); 
});

Routes.get('/dicover-movies', dicoverMoviesCotroller.index);

export default Routes;