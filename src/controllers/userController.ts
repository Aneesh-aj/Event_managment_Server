import {Req,Res,Next} from "../framWork/types/serverPackageTypes"
import { Ifirebase } from "../useCases/interface/service/firebase"
import { IuserUseCase } from "../useCases/interface/usecase/userUseCase"



export class UserController{
     
    private userUseCase : IuserUseCase
    private readonly firebase : Ifirebase

    constructor(userUseCase: IuserUseCase,firebase:Ifirebase){
        this.userUseCase = userUseCase
        this.firebase = firebase
    }

    async signup(req:Req, res: Res ,next : Next){
        console.log("the backedn ",req.body.email)
        console.log("whole body",req.body)
        const user = await this.userUseCase.userSignup(req.body.email , next)
        console.log(" working end")
        res.json("ok")
         
    }


    async createUser(req:Req, res : Res ,next:Next){
        console.log("int the createuser controller")
        const user = await this.userUseCase.createUser({name:req.body.name,email:req.body.email,password:req.body.password},req.body.otp,next)
          console.log("at the end of the uer",user)
          res.send('/user/profile')
    }

    // async organizerLogin(req:Req, res : Res, next : Next){
    //      console.log("org login controller")
    //     //  const org = await 
    // }
}