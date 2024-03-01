import { Next , Res, Req } from "../../../framWork/types/serverPackageTypes";


export  interface IorganizerUseCase{
    createOrganizer({name,email,password,country,state,city,pincode,ownerId,phoneNumber,companyLicense,companyInsurance,bankPassbook,building}
         : {name:string, email : string, password: string,country:string,state:string, city: string, pincode:number, ownerId: object,phoneNumber:string, companyLicense:object, companyInsurance:object,bankPassbook: object,building : string}, next : Next) : Promise < String | void >

          
}