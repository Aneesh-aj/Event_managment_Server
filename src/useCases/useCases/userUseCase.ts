import { Req,Res,Next } from "../../framWork/types/serverPackageTypes";

import { IuserUseCase } from "../interface/usecase/userUseCase";
import { Iuser } from "../../entities/user";
import { login } from "./user/login";
import { createUser } from "./user/createUser";
import { userSignup } from "./user/signup";
import { IuserRepository } from "../interface/repositoryInterface/userRepository";
import { Ijwt } from "../interface/service/jwt";
import { NextFunction } from "express";
import { IotpGenerate } from "../interface/service/otpGenerate";
import { IotpRepository } from "../interface/repositoryInterface/otpRepository";
import { IsentEmail } from "../interface/service/sentEmail";


export class UserUseCase implements IuserUseCase{

    private readonly   userRepository : IuserRepository
    private readonly  jwt : Ijwt
    private readonly  otpGenerate : IotpGenerate
    private readonly  otpRepository : IotpRepository
    private readonly sentEmail : IsentEmail

    constructor(
         userRepository : IuserRepository,
          jwt : Ijwt,
          otpGenerate : IotpGenerate,
          otpRepository : IotpRepository,
          sentEmail : IsentEmail
    ){
        this.userRepository = userRepository
        this.jwt = jwt
        this.otpGenerate = otpGenerate
        this.otpRepository = otpRepository
        this.sentEmail = sentEmail
    }
    async  userSignup( email: string,next:Next): Promise<string | void> {
          try{
            let result = await userSignup(this.otpRepository,this.otpGenerate,email,this.sentEmail)
            return 
          }catch(error){
            throw(error)
          }
     }
    async  login(name: string, password: string, next: NextFunction): Promise<string | void> {
         return login(this.userRepository,
          this.jwt,
          name,
          password)
     }

     async createUser(newUser:Iuser,otp:string, next: NextFunction): Promise<string | void> {
          const user = await createUser(newUser,otp,this.otpRepository,this.userRepository)
          return user
      }

     
      
     
     
}