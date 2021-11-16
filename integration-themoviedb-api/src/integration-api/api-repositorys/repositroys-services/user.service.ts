//Repository's
import UserRepository from "../user.repository";

//Dto's
import UserDto from "../../dtos/user.dto";


//Model's
import User from "../../../integration-database/mappings/user.mapping";


export default class UserService extends UserRepository {


    constructor() {
        super();
    }

    public getAllUsers(): UserDto {
        User.findAll()
            .then(result => {
               return result;
            }).catch(err => {
                return err;
            });

        return;
    }

    public getUserByEmail(Email: String): UserDto {
        return;
    }

    public getUserById(id: String): UserDto {
        return;
    }

    public createUser(user: UserDto): any{
        return User.create(user);
    }

    public updateUser(user: UserDto): any {
        return User.update({
            FirstName: user.FirstName,
            Surname: user.Surname,
            Email: user.Email,
            Nickname: user.Nickname
        },{
            where: {
                id: user.id.toString()
            }
        });
    }

    public deleteUser(id: String): UserDto {
        return;
    }
}