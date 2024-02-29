import { UserController } from "../../../../controllers/userController";
import { userRepository } from "../../../database/repository/userRepository/userRepository";
import { UserUseCase } from "../../../../useCases/useCases/userUseCase";
import userModel from "../../../database/model/userModel";
import { JWTtoken } from "../../../service/jwt";
import { Encrypt } from "../../../service/hashPassword";
import { OtpGenerate } from "../../../service/otpGenerator";
import { OtpRepository } from "../../../database/repository/otpRepository"
import { SentEmail } from "../../../service/sentEmail";
const jwttoken = new JWTtoken()
const otpGenerate = new OtpGenerate()
const otprepository = new OtpRepository()
const sentemail = new SentEmail()

const userrepository = new userRepository(userModel)
const userusecase = new UserUseCase(userrepository,jwttoken,otpGenerate,otprepository,sentemail)
const  userController = new UserController(userusecase)

import organizerModel from "../../../database/model/organizer";
import addressModel from "../../../database/model/address";
import { OrganizerRepository } from "../../../database/repository/organizerRepository/organizerRepository";
import { OrganizerController } from "../../../../controllers/organizerController";
import { OrganizerUseCase } from "../../../../useCases/useCases/organizerUseCase";

const bycryptsurvice =new  Encrypt()

const organizerrepository = new OrganizerRepository(organizerModel)
const organizerusecase = new  OrganizerUseCase(organizerrepository,bycryptsurvice,jwttoken)
const organizerController = new  OrganizerController(organizerusecase)


export { userController,organizerController}