import { AxiosResponse } from "axios";
import DiscoverMoviesDto from "../dtos/dicover-moveis.dto";


export default abstract class DicoverMoviesRepository {
    public constructor(){}

    public abstract getDiscoverMovies(params: any): Promise<AxiosResponse>;

}