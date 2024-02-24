import organizerModel from "../../model/organizer";

import { Iorganizer } from "../../../../entities/organizer";
import {createOrganizer} from './organizer/index'

import { IorganizerRepository } from "../../../../useCases/interface/repositoryInterface/organizerRepository";


export class OrganizerRepository implements IorganizerRepository{
    constructor(private organizerModels: typeof organizerModel){
    
    }
   async  createOrganizer(newUser: Iorganizer): Promise<Iorganizer | void> {
        return await createOrganizer(newUser, this.organizerModels)
    }
}