import {Req,Res,Next} from "../framWork/types/serverPackageTypes"
import { IuserUseCase } from "../useCases/interface/usecase/userUseCase"



export class UserController{
     
    private userUseCase : IuserUseCase

    constructor(userUseCase: IuserUseCase){
        this.userUseCase = userUseCase
    }

    async signup(req:Req, res: Res ,next : Next){
        console.log("the backedn ",req.body.email)
        console.log("whole body",req.body)
        const user = await this.userUseCase.userSignup(req.body.email , next)
        console.log(" working end")
        return
         
    }


    async createUser(req:Req, res : Res ,next:Next){
        console.log("int the createuser controller")
        const user = await this.userUseCase.createUser({name:req.body.name,email:req.body.email,password:req.body.password},req.body.otp,next)
    }

    // async organizerLogin(req:Req, res : Res, next : Next){
    //      console.log("org login controller")
    //     //  const org = await 
    // }
}