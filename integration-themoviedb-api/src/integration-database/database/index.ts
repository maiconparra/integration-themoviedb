import { Sequelize } from 'sequelize';

// Mappings


const connection = new Sequelize('mysql://root:@localhost:3306/contact');

//cars.onLoadCar(connection);

export default connection;