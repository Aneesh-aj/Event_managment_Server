import organizerModel from "../../model/organizer";

import { Iorganizer } from "../../../../entities/organizer";
import {addAddress, createOrganizer, findbyEmail , organizerLogin} from './organizer/index'

import { IorganizerRepository } from "../../../../useCases/interface/repositoryInterface/organizerRepository";
import { Iaddress } from "../../../../entities/address";
import addressModel from "../../model/address";


export class OrganizerRepository implements IorganizerRepository{
    constructor(private organizerModels: typeof organizerModel){
    
    }
   async  createAddress(newaddres: Iaddress): Promise<void | Iaddress> {
        return await addAddress(newaddres,addressModel)
    }
   async  createOrganizer(newUser: Iorganizer): Promise<Iorganizer | void> {
        return await createOrganizer(newUser, this.organizerModels)
    }

    async  findbyEmail(email: string): Promise< string | void> {
        return await findbyEmail(email,organizerModel)
    }
    async  organizerLogin(email: string, password: string): Promise<string | void> {
           return await organizerLogin(email,password,organizerModel)
    }
}