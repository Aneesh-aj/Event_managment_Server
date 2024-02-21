import {Route,Req , Res, Next } from "../../types/serverPackageTypes"
import { userController } from "./injections/Injection"


export function UserRoute(router: Route){
    router.post('/register', (req : Req, res : Res , next : Next)=>{
        userController.createUser(req,res,next)
    })
    return router

}