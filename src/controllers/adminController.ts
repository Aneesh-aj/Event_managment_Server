import { Next,Req,Res } from "../framWork/types/serverPackageTypes";
import { IadminUsecase } from "../useCases/interface/usecase/adminUsecase";
import { accessTokenOptions, refreshTokenOptions } from "./middleware/Tokens";
export class AdminController{

    private adminUsecase : IadminUsecase
     constructor(adminUsecase:IadminUsecase){
        this.adminUsecase = adminUsecase
     }

     async login(req:Req, res:Res,next : Next){
        console.log("at the controller")
            let admin = await this.adminUsecase.login({email:req.body.email,password:req.body.password},next)

            res.cookie("accesToken",admin?.accessToken,accessTokenOptions)
         res.cookie("refreshToken",admin?.refreshToken,refreshTokenOptions)
         res.cookie("role",'user')

         if(admin){
             console.log("amdinn",admin.accessToken)
         }
         res.status(200).json({token:admin?.accessToken,role:'admin'})
  
     }
}