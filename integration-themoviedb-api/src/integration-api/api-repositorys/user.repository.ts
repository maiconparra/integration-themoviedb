import UserDto from "../dtos/user.dto";



export default abstract class UserRepository {


    public constructor() {}


    public abstract getAllUsers(): UserDto;

    public abstract getUserById(id: String): UserDto;

    public abstract getUserByEmail(Email: String): UserDto;

    public abstract createUser(User: UserDto): any;

    public abstract updateUser(User: UserDto): any;

    public abstract deleteUser(id: string): any;

}