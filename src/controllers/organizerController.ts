import { Next,Req,Res } from "../framWork/types/serverPackageTypes";
import { IorganizerUseCase } from "../useCases/interface/usecase/organizerUseCase";

export class OrganizerController{
     private organizerUsecase : IorganizerUseCase

     constructor(organizerUseCase: IorganizerUseCase){
         this.organizerUsecase = organizerUseCase
     }

     async createOrganizer(req:Req,res: Res, next : Next){
         console.log("here at organiizer",req.body)
          const result = await  this.organizerUsecase.createOrganizer(req.body,next)
          console.log("here at organiizer  result",result)
         res.json(result)
     }

}