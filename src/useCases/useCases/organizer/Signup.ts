import { IorganizerRepository } from "../../interface/repositoryInterface/organizerRepository";
import { Ifirebase } from "../../interface/service/firebase";
import { Ihashpassword } from "../../interface/service/hashpassword";


export const Signup = async(
    
    
    firebase:Ifirebase, OrganizerRepository:IorganizerRepository ,hashPassword: Ihashpassword, ownerId:File,companyLicense: File,companyInsurance:File,bankPassbook:File,
    // name: string,email:string,password:string,phoneNumber:string, ownerId: File,  building:string,country:string,state:string,city:string,pincode:number
    
    ) : Promise <string | void > =>{
        console.log("befoer the firebase ")

   await  firebase.uploadOrganizerInfo(ownerId,companyInsurance,companyLicense,bankPassbook)
   console.log("ok chekced")

    // const address = await OrganizerRepository.createOrganizer({name,email,password})

    // const encryptPassword = await hashPassword.createHash(password)
    // password = encryptPassword
     
    // const afert  = await  Ifirebase
    


    // const user = await OrganizerRepository.createOrganizer({name,email,phoneNumber,password,ownerId,companyLicense,companyInsurance,bankPassbook})
    // const  userId = user?._id
    // if(userId){
    //     const address = await OrganizerRepository.createAddress({country,state,city,pincode,building,userId})
    //     return address 
    //    }
    // return 'hello'

} 

