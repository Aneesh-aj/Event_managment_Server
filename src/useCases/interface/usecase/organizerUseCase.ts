import { stat } from "fs";
import { Next , Res, Req } from "../../../framWork/types/serverPackageTypes";


export  interface IorganizerUseCase{
    createOrganizer({name,email,password,country,state,city,pincode,ownerId,companyLicense,companyInsurance,bankPassbook,building}
         : {name:string, email : string, password: string,country:string,state:string, city: string, pincode:number, ownerId: string, companyLicense:string, companyInsurance:string,bankPassbook: string,building : string}, next : Next) : Promise < String | void >
}