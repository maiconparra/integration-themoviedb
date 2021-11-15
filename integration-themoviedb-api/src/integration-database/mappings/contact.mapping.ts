import { DataTypes } from "sequelize/types";

//Model
import ContactModel from "../../integration-business/business-models/contact.model";

export default class Contact extends ContactModel {

    static onLoadContact(sequelize: any): void {
        super.init({
            UserId: DataTypes.STRING,
            PhoneNumber: DataTypes.STRING
        },{
            sequelize,
            freezeTableName: true
        })
    }

    static associate(model: any): void {
        this.belongsTo(model.User);
    }

}