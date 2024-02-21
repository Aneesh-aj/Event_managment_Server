import { Iuser } from "../../../entities/user";

export interface IuserRepository{
    createUser(newUser:Iuser) : Promise < Iuser>
}