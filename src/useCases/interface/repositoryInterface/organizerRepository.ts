import { Iorganizer } from "../../../entities/organizer";

export interface IorganizerRepository{
    createOrganizer(newUser:Iorganizer): Promise < Iorganizer | void>
}