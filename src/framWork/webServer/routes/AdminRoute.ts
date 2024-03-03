import { Route,Req , Res, Next } from "../../types/serverPackageTypes";
import { adminController } from "./injections/Injection";

export function AdminRoute(router:Route){
    
    router.post('/login',(req:Req , res : Res , next : Next)=>{
         adminController.login(req,res,next)
    })

    return router
}