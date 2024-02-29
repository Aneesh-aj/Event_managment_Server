import { IuserRepository } from "../../interface/repositoryInterface/userRepository";

import { Ijwt } from "../../interface/service/jwt";

export const login = async (userRepository:IuserRepository,jwt:Ijwt,email:string,password:string) : Promise <string | void >=>{
      const checked  = await userRepository.findbyEmail(email)

    //   if(checked){
    //       let token = await jwt.verifyJwt()
    //   }else{

    //   }
}