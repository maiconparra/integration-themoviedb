import { Request, Response } from 'express';

import DiscoverMoviesService from '../api-repositorys/repositroys-services/discover-moveis.service';


export default class DicoverMoviesCotroller {

    public constructor(){}

    public async index(req: Request, res: Response): Promise<Response> {

        const params = req.body;

        const discoverMoviesService: DiscoverMoviesService = new DiscoverMoviesService;

        return res.json(await (await discoverMoviesService.getDiscoverMovies(params)).data.results);
    }

}