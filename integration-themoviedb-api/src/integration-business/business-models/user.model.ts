import UserInterface from '../business-interfaces/user.interface';

import { Model, Optional} from 'sequelize';

interface UserCreation extends Optional<UserInterface, "id"> {}

export default class UserModel extends Model<UserInterface, UserCreation> implements UserInterface {
    public id?: String;
    public FirstName: String;
    public Surname: String;
    public Email: String;
    public Nickname: String;
}