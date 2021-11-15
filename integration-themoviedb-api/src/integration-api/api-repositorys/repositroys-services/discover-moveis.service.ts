//lib's
import axios, { AxiosResponse } from 'axios';
require('dotenv').config;

//Repository's
import DicoverMoviesRepository from "../discover-moves.repository";

//Dto's
import DiscoverMoviesDto from "../../dtos/dicover-moveis.dto";



export default class DiscoverMoviesService extends DicoverMoviesRepository {


    public constructor() {
        super();
    }

    public getDiscoverMovies(params: any): Promise<AxiosResponse> {

       const dicoverMovies = axios.get<DiscoverMoviesDto>('https://api.themoviedb.org/3/discover/movie?api_key=e96a538dd4d67762e0bae13e3d121fea&language=' + params.language);
       
       return dicoverMovies;
    }

}