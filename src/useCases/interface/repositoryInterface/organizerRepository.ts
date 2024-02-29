import { Iaddress } from "../../../entities/address";
import { Iorganizer } from "../../../entities/organizer";

export interface IorganizerRepository{
    createOrganizer(newUser:Iorganizer): Promise < Iorganizer | void>
    createAddress(newaddres:Iaddress):Promise <any>
    findbyEmail(email:string):Promise < string | void >
    organizerLogin(email:string,password:string) : Promise < string | void > 
}