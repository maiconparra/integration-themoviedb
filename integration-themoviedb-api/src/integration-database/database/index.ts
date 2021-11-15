import { Sequelize } from 'sequelize';

//Mappings
import User from '../mappings/user.mapping';
import Contact from '../mappings/contact.mapping';
import Moveis from '../mappings/moveis.mappin';

const connection = new Sequelize('mysql://maiconparra:12345@localhost:3306/FavoriteMovies');

User.onLoadUser(connection);
Contact.onLoadContact(connection);
Moveis.onLoadMovies(connection);

User.associate(connection.models);
Contact.associate(connection.models);
Moveis.associate(connection.models);

export default connection;