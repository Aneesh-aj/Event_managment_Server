import { Next } from "../../../framWork/types/serverPackageTypes";


export interface IadminUsecase{
     login({email,password}:{email:string,password:string},next:Next) : Promise < any>
}