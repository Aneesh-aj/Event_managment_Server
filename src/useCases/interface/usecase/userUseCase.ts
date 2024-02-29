import { Iuser } from "../../../entities/user";

import { Next,Res,Req } from "../../../framWork/types/serverPackageTypes";

export interface IuserUseCase{
    userSignup( email :string,next : Next) : Promise < string | void >
    login(name:string,password:string,next:Next) : Promise < string | void> 
    createUser(newUser:Iuser,otp:string, next: Next) : Promise <string | void>
}