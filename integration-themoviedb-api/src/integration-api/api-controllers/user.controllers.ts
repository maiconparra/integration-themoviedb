import { Request, Response } from 'express';
import { removeTicks } from 'sequelize/types/lib/utils';
import { v4 } from 'uuid';

//Services
import UserService from '../api-repositorys/repositroys-services/user.service';

export default class UserController {

    public constructor() {}

    public async createUser(req: Request, res: Response): Promise<Response> {

        const userService: UserService = new UserService;

        const { FirstName, Surname, Email, Nickname } = req.body;

        if( FirstName == '' || Surname == '' || Email == '' || Nickname == '' ) {
            return res.json({error: 'Não pode haver dados vazios'});
        }else {
            return res.json(await userService.createUser({ id: v4(), FirstName, Surname, Email, Nickname }));
        }
    }

    public async getUsers(req: Request, res: Response): Promise<Response> {
        const userService = new UserService; 

        return res.json(await userService.getAllUsers());

    }

    public async updateUser(req: Request, res: Response): Promise<Response> {
        const userService: UserService = new UserService;

        const { id, FirstName, Surname, Email, Nickname } = req.body;

        if( id == '' || FirstName == '' || Surname == '' || Email == '' || Nickname == '' ) {
            return res.json({error: 'Não pode haver dados vazios'});
        }else {
            return res.json(await userService.updateUser({ id, FirstName, Surname, Email, Nickname }));
        }
    }

}