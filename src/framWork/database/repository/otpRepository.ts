import { Iotp } from "../../../entities/otp";
import { IotpRepository } from "../../../useCases/interface/repositoryInterface/otpRepository";
import otpModel from "../model/otp";

export class OtpRepository implements IotpRepository{
      constructor(){}

      async createOtp(email:string,otp:string): Promise<Iotp> {
        console.log("before calling the otp crating")
          let  result = await otpModel.create({email,otp})
          setTimeout(async () => {
            if (result?._id) {
              await otpModel.findByIdAndDelete(result._id);
            }
          }, 120000);
          console.log("the otp creating", result)
          return result
      }

     async findOtp(email: string): Promise<Iotp | null> {
          const result = await otpModel.findOne({email})
          return result
      }

      
      
      
}