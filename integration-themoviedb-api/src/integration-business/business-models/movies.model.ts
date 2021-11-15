import MoveisInterface from '../business-interfaces/movies.interface';

import { Optional, Model } from 'sequelize';
import MoviesInterface from '../business-interfaces/movies.interface';

interface MoveisCreation extends Optional<MoveisInterface, "id"> {}

export default class MoviesModel extends Model<MoveisInterface, MoveisCreation> implements MoviesInterface {
    public UserId: String;
    public IntegrationId: Number;
}