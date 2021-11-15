import { Sequelize } from 'sequelize';

// Mappings
import User from '../mappings/user.mapping';
import Contact from '../mappings/contact.mapping';
import Moveis from '../mappings/moveis.mappin';

const connection = new Sequelize('mysql://root:@localhost:3306/cars');

User.onLoadUser(connection);
Contact.onLoadContact(connection);
Moveis.onLoadMovies(connection);

export default connection;