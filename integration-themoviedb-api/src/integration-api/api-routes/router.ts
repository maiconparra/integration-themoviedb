import { Request, Response } from 'express';
import { Router } from 'express';

import path from 'path';

//Controller's
import DicoverMoviesCotroller from '../api-controllers/discover-movies.controllers';
import UserController from '../api-controllers/user.controllers';

const Routes = Router();

const dicoverMoviesCotroller: DicoverMoviesCotroller = new DicoverMoviesCotroller;

const userController: UserController = new UserController;

Routes.get('/', (req: Request, res: Response) => {
    return res.sendFile(path.resolve(__dirname, '..', '..', 'index.html')); 
});

Routes.get('/dicover-movies', dicoverMoviesCotroller.find);

//User
Routes.post('/user-create', userController.createUser);
Routes.post('/user-update', userController.updateUser);
Routes.get('/user-all', userController.getUsers);

export default Routes;