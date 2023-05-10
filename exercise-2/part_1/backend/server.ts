// Main file in the SERVER 
import cors from "cors";
import express from "express";
import ErrorHandler from "./MiddleWare/route-not-found";
import client_controller from "./Routes/client_controller";
import sql_init from "./sql/init";
import config from "./Utils/config";
import manufacturer_controller from "./Routes/manufacturer_controller";


const server = express();
sql_init();
const currentPort = config.port;
server.use(cors());
server.use(express.json());
server.use("/client",client_controller);
server.use("/manufacturer",manufacturer_controller);
server.use("*", ErrorHandler);

server.listen(currentPort, () => {console.log(`listening on http://localhost:${currentPort}`)} )