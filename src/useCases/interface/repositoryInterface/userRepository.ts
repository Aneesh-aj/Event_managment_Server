import { Iuser } from "../../../entities/user";
import { Ijwt } from "../service/jwt";

export interface IuserRepository{
    createUser(newUser:Iuser) : Promise < Iuser>
    findbyEmail(email:string) : Promise < Iuser | void>
    singup(email:string) :Promise <string>
}