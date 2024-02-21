import { Iuser } from "../../../entities/user";

import { Next,Res,Req } from "../../../framWork/types/serverPackageTypes";



export interface IuserUseCase{
    creatUser({name,email,password} :{name:string;email:string;password:string},next : Next) : Promise < string | void >
}