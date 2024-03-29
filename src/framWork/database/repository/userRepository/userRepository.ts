import userModel  from "../../model/userModel";
import { Iuser } from "../../../../entities/user";

import { IuserRepository } from "../../../../useCases/interface/repositoryInterface/userRepository";

import {createUser,findbyEmail} from './user/ index'
import { login } from "../../../../useCases/useCases/user/login";
import { getAllusers } from "./user/getAlllusers";
import { blockuser } from "./user/block";

export class userRepository implements IuserRepository{
    constructor(private userModels: typeof userModel){}
    async  createUser(newUser: Iuser): Promise<Iuser> {
        return await  createUser(newUser, this.userModels)
    }

    async findbyEmail(email: string): Promise<void | Iuser> {
        return await findbyEmail(this.userModels,email)
    }

    async  singup(email: string): Promise<string> {
        return "jiii"
    }
    async  getAllusers(): Promise<string> {
        return await getAllusers(this.userModels)
    }
    async  blockUser(id: string): Promise<any> {
        console.log("josjdfs hhhhheheheh")
        return await blockuser(id,userModel)
    }
}