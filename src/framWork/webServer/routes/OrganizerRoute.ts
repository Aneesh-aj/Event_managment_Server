import { Route,Req , Res , Next } from "../../types/serverPackageTypes";

import { organizerController } from "./injections/Injection";


export function OrganizerRoute(router: Route){

     router.post('/signup',(req: Req , res : Res , next : Next)=>{
         organizerController.singup(req,res,next)
         res.json().status(200)
     })

     router.post('/register',(req : Req, res : Res , next : Next)=>{
        console.log("routerdkkkkkkkkkkkkk")
        organizerController.createOrganizer(req,res ,next)
        res.json().status(200)
     })



     return router
}