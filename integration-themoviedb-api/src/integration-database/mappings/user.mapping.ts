import UserModel from '../../integration-business/business-models/user.model';
import { DataTypes } from 'sequelize';

export class User extends UserModel {

    static onLoadCar(sequelize: any): void{
        super.init({
            FirstName: DataTypes.STRING,
            Surname: DataTypes.STRING,
            Email: DataTypes.STRING,
            Nickname: DataTypes.STRING
        },{
            sequelize,
            freezeTableName: true
        });
    }

}