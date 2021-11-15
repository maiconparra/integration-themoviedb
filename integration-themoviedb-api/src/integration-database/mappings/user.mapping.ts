import { DataTypes } from 'sequelize';

//Model
import UserModel from '../../integration-business/business-models/user.model';

export default class User extends UserModel {

    static onLoadUser(sequelize: any): void{
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

    static associate(model: any): void {
        this.hasMany(model.Contact, { foreignKey: "UserId", as: "Contacts" });
        this.hasMany(model.Movies, { foreignKey: "UserId", as: "Movies"});
    }

}