import { IuserRepository } from "../../interface/repositoryInterface/userRepository";


export const createUser = async (userRepository:IuserRepository,name:string,email:string,password:string): Promise <string | void> =>{
    const creating = await userRepository.createUser({name,email,password})
     
}