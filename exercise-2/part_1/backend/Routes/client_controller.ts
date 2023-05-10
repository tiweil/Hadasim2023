// All the routes that connect the the DB and client.
import express, {NextFunction, Request, Response} from 'express';
import client_logic from '../Logic/client_logic';

// generic router 
const client_router = express.Router();

// gets all
client_router.get("/", async (request: Request, response: Response, next: NextFunction) => {
  response.status(200).json( await client_logic.getAllClients())
})

client_router.get("/:id", async (request: Request, response: Response, next: NextFunction) => {
  const someData = +request.params.id;
  response.status(200).json( await client_logic.getSingleClient(someData))
})

// sends information to DB
client_router.post("/add", async (request: Request, response: Response, next: NextFunction) => {
  const someData = request.body;
  response.status(201).json( await client_logic.addClient(someData))
})







export default client_router;