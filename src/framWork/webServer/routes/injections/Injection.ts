import { UserController } from "../../../../controllers/userController";
import { userRepository } from "../../../database/repository/userRepository/userRepository";
import { UserUseCase } from "../../../../useCases/useCases/userUseCase";
import userModel from "../../../database/model/userModel";
import { JWTtoken } from "../../../service/jwt";
import { Encrypt } from "../../../service/hashPassword";
import { OtpGenerate } from "../../../service/otpGenerator";
import { OtpRepository } from "../../../database/repository/otpRepository"
import { SentEmail } from "../../../service/sentEmail";


const bycryptsurvice =new  Encrypt()

const jwttoken = new JWTtoken()
const otpGenerate = new OtpGenerate()
const otprepository = new OtpRepository()
const sentemail = new SentEmail()

const userrepository = new userRepository(userModel)
const userusecase = new UserUseCase(userrepository,jwttoken,otpGenerate,otprepository,sentemail,bycryptsurvice)
const  userController = new UserController(userusecase)

import organizerModel from "../../../database/model/organizer";
import addressModel from "../../../database/model/address";
import { OrganizerRepository } from "../../../database/repository/organizerRepository/organizerRepository";
import { OrganizerController } from "../../../../controllers/organizerController";
import { OrganizerUseCase } from "../../../../useCases/useCases/organizerUseCase";

import { AdminController} from "../../../../controllers/adminController";
import { AdminUsecase } from "../../../../useCases/useCases/adminUsecase";
import { AdminRepository } from "../../../database/repository/adminRepository/adminRepository";

const adminrepository = new AdminRepository()

const organizerrepository = new OrganizerRepository(organizerModel)
const adminusecase = new AdminUsecase(bycryptsurvice,adminrepository,jwttoken,organizerrepository,userrepository)
const organizerusecase = new  OrganizerUseCase(organizerrepository,bycryptsurvice,otpGenerate,otprepository,sentemail)
const organizerController = new  OrganizerController(organizerusecase)
const adminController = new AdminController(adminusecase)

export { userController,organizerController,adminController}