import { app } from "./frameWrok/webServer/config/app";
import conncetDb from "./frameWrok/webServer/config/db";





app.listen(3000,()=>{
    console.log("portrunning on : http://localhost:3000")
    conncetDb()
})