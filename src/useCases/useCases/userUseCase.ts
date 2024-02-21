import { Req,Res,Next } from "../../framWork/types/serverPackageTypes";

import { IuserUseCase } from "../interface/usecase/userUseCase";
import { Iuser } from "../../entities/user";
import { createUser } from "./user/createUser";
import { IuserRepository } from "../interface/repositoryInterface/userRepository";

export class UserUseCase implements IuserUseCase{

    private readonly   userRepository : IuserRepository

    constructor(
         userRepository : IuserRepository
    ){
        this.userRepository = userRepository
    }
    async  creatUser({ name, email, password }: { name: string; email: string; password: string; }): Promise<string | void> {
          try{
            let result = await createUser(this.userRepository,name ,email,password)
          }catch(error){
            throw(error)
          }
     }
}