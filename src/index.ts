import { app } from "./framWork/webServer/config/app";
import conncetDb from "./framWork/webServer/config/db";





app.listen(3000,()=>{
    console.log("portrunning on : http://localhost:3000")
    conncetDb()
})