import { IorganizerRepository } from "../../interface/repositoryInterface/organizerRepository";
import { Ihashpassword } from "../../interface/service/hashpassword";


export const Signup = async( OrganizerRepository:IorganizerRepository ,hashPassword: Ihashpassword, name: string,email:string,password:string,phoneNumber:string, ownerId: string ,companyLicense: string,companyInsurance:string, bankPassbook:string, building:string,country:string,state:string,city:string,pincode:number) : Promise <string | void > =>{
    // const address = await OrganizerRepository.createOrganizer({name,email,password})
    const encryptPassword = await hashPassword.createHash(password)
    password = encryptPassword
     

    


    // const user = await OrganizerRepository.createOrganizer({name,email,phoneNumber,password,ownerId,companyLicense,companyInsurance,bankPassbook})
    // const  userId = user?._id
    // if(userId){
    //     const address = await OrganizerRepository.createAddress({country,state,city,pincode,building,userId})
    //     return address 
    //    }
    // return 'hello'

} 

