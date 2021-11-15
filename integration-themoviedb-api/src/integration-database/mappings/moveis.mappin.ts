import { DataTypes } from "sequelize/types";

//Model
import MoviesModel from "../../integration-business/business-models/movies.model";

export default class Moveis extends MoviesModel {

    static onLoadMovies(sequelize: any): void {
        super.init({
            UserId: DataTypes.STRING,
            IntegrationId: DataTypes.INTEGER
        },{
            sequelize,
            freezeTableName: true
        });
    }

    static associate(model: any): void {
        this.belongsTo(model.User);
    }

}