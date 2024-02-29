import { Iuser } from "../../entities/user";
import { Iorganizer } from "../../entities/organizer";
import { Ijwt,IToken } from "../../useCases/interface/service/jwt";
import jwt from 'jsonwebtoken'

export class JWTtoken implements Ijwt{
     
      JWT_VERIFICATION_KEY=' HELOSOOSO'
      JWT_ACCESS_KEY ='HSFHSKFSKFSH'
      JWT_REFRESH_KEY = "JSLDJFLSJDFS"

      async createVerificationJWT(payload: Iuser | Iorganizer): Promise<string> {
          const verifyToken = await jwt.sign(payload, this.JWT_VERIFICATION_KEY,{
             expiresIn:'15m',
          })
          return verifyToken
      }

      async createAccessAndRefreshToken(id: string, role: "user" | "organizer"): Promise<IToken> {
          const payload = {id , role}
           const accessToken = await jwt.sign(payload , this.JWT_ACCESS_KEY,{
              expiresIn:'5h'
           })

           const refreshToken = await jwt.sign(payload,this.JWT_REFRESH_KEY,{
             expiresIn:'3d',
           })

           return {accessToken,refreshToken}
      }

      async  verifyJwt(token: string): Promise<Iuser | Iorganizer | { userId: string; email: string; iat: number; exp: number; }> {
          return (await jwt.verify(token, this.JWT_VERIFICATION_KEY)) as Iuser | Iorganizer
      }

      async  forgotPasswordToken(userId: string, email: string): Promise<string> {
           const token = await jwt.sign({userId,email}, this.JWT_VERIFICATION_KEY,{
             expiresIn:'10m'
           })
           return token
      }
}