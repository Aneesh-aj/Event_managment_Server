import { Iorganizer } from "../../../../../entities/organizer";
import addressModel from "../../../model/address";
import organizerModel from "../../../model/organizer";


export const createOrganizer = async (newUser: Iorganizer, organizerModels: typeof organizerModel): Promise <Iorganizer | void> =>{
     try{

        const addres = await addressModel.create(newUser)
        const orgnaizer = await organizerModel.create(newUser)
        console.log("organizer details ::::===>",orgnaizer)
        console.log("after that address",addres)
     }catch(error){
        throw error
     }
}
