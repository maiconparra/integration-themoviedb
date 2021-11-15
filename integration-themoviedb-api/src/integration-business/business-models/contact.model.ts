import ContactInterface  from '../business-interfaces/contact.interface';

import { Model, Optional } from 'sequelize';

interface ContactCreation extends Optional<ContactInterface, "id"> {}

export default class ContactModel extends Model<ContactInterface, ContactCreation> implements ContactInterface {
    public UserId: String;
    public PhoneNumber: String;
}