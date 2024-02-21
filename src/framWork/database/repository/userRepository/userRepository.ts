import userModel  from "../../model/userModel";
import { Iuser } from "../../../../entities/user";

import { IuserRepository } from "../../../../useCases/interface/repositoryInterface/userRepository";

import {createUser} from '../userRepository/usre/ index'

export class userRepository implements IuserRepository{
    constructor(private userModels: typeof userModel){}
    async  createUser(newUser: Iuser): Promise<Iuser> {
        return await  createUser(newUser, this.userModels)
    }
}