import { Iotp } from "../../../entities/otp";


export interface IotpRepository{
    createOtp(email:string,otp:string) : Promise <Iotp>
}

