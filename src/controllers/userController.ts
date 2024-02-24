import {Req,Res,Next} from "../framWork/types/serverPackageTypes"
import { IuserUseCase } from "../useCases/interface/usecase/userUseCase"



export class UserController{
     
    private userUseCase : IuserUseCase

    constructor(userUseCase: IuserUseCase){
        this.userUseCase = userUseCase
    }

    async createUser(req:Req, res: Res ,next : Next){
        console.log("the backedn ",req.body)
        const user = await this.userUseCase.creatUser(req.body , next)
         
    }
}