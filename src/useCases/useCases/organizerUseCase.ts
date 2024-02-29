import { IorganizerRepository } from "../interface/repositoryInterface/organizerRepository";
import { IorganizerUseCase } from "../interface/usecase/organizerUseCase";
import { Ihashpassword } from "../interface/service/hashpassword";
import { Signup} from './organizer/index'
import { Next } from "../../framWork/types/serverPackageTypes";
import { Ijwt } from "../interface/service/jwt";

export class OrganizerUseCase  implements IorganizerUseCase{
      private readonly organizerRepository : IorganizerRepository
      private readonly hashpassword : Ihashpassword
      private readonly jwt : Ijwt

      constructor( organizerRepository : IorganizerRepository,
         hashpassword : Ihashpassword,
         jwt : Ijwt
         )
         {
         this.organizerRepository = organizerRepository
         this.hashpassword = hashpassword
         this.jwt = jwt
      }

     async createOrganizer({ name, email, password, country, state, city, pincode, ownerId, phoneNumber, companyLicense, companyInsurance, bankPassbook, building }: { name: string; email: string; password: string; country: string; state: string; city: string; pincode: number; ownerId: string; phoneNumber: string; companyLicense: string; companyInsurance: string; bankPassbook: string; building: string; }, next: Next): Promise<void | String> {
          try {
            console.log('here at the usecase')
        let result = await Signup(
               this.organizerRepository,
               this.hashpassword ,
              //  this.jwt, 
               name,
               email,
               password,
               ownerId,
               phoneNumber,
               companyLicense,
               companyInsurance,
               bankPassbook,
               building,
               country,
               state,
               city,
               pincode) 
          } catch (error) {
             console.log(error)
          }
      }

     
}