import { UserController } from "../../../../controllers/userController";
import { userRepository } from "../../../database/repository/userRepository/userRepository";

import { UserUseCase } from "../../../../useCases/useCases/userUseCase";
import userModel from "../../../database/model/userModel";



const userrepository = new userRepository(userModel)
const userusecase = new UserUseCase(userrepository)
const  userController = new UserController(userusecase)


export { userController}