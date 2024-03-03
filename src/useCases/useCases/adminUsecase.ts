import { NextFunction } from "express";
import { IadminUsecase } from "../interface/usecase/adminUsecase";
import { Ihashpassword } from "../interface/service/hashpassword";
import { login } from "./admin/login";
import { IadminRepository } from "../interface/repositoryInterface/adminRepository";
import { Iuserjwt } from "../interface/service/jwt";

export class AdminUsecase implements IadminUsecase{
    private readonly hashpassword : Ihashpassword
    private readonly adminRepository : IadminRepository
    private readonly jwt : Iuserjwt

     constructor(hashpassword: Ihashpassword , adminRepository:IadminRepository,jwt:Iuserjwt){
         this.hashpassword = hashpassword
         this.adminRepository = adminRepository
         this.jwt = jwt
     }

   async  login({ email, password }: { email: string; password: string; }, next: NextFunction): Promise<any> {
       console.log(" in the usecase")
      let result = await  login(email,password,this.hashpassword,this.adminRepository,this.jwt)
       return result
    }
}