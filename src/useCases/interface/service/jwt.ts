import { Iuser } from "../../../entities/user";
import { Iorganizer } from "../../../entities/organizer";
import { Req } from "../../../framWork/types/serverPackageTypes";


export interface IToken{
    accessToken:string,
    refreshToken:string
}

export interface Ijwt{
    createVerificationJWT(payload:Iuser | Iorganizer): Promise <string>
    createAccessAndRefreshToken(id:string, role:'user'|'organizer'): Promise <IToken>
    verifyJwt(token:string): Promise <Iuser | Iorganizer | {userId:string; email:string;  iat:number ; exp:number}>
    forgotPasswordToken(userId:string, email:string): Promise <string>
}