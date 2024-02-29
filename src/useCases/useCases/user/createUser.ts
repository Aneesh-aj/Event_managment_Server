import { Iuser } from "../../../entities/user"
import { IotpRepository } from "../../interface/repositoryInterface/otpRepository"
import { IuserRepository } from "../../interface/repositoryInterface/userRepository"



export const createUser= async (newUser:Iuser,otp:string,otpRepository:IotpRepository,userRepository:IuserRepository):Promise <string | void>=>{  
     
    console.log("inside the creater",newUser)
    console.log("next is otp",otp)

    const isTrue = await otpRepository.findOtp(newUser.email)

    if(isTrue){
        console.log("inside if")
        if(isTrue.otp === otp){
            console.log("inside another if")
            let user = await userRepository.createUser(newUser)
            console.log(user)
            console.log("okkkkkkkkkkkkk")
            return user?._id
        }
    }



     return 
}