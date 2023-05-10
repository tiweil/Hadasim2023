// All the routes that connect the the DB and client.
import express, {NextFunction, Request, Response} from 'express';
import manufacturer_logic from '../Logic/manufacturer_logic';

// generic router 
const router_manufacturer = express.Router();

// gets all
router_manufacturer.get("/", async (request: Request, response: Response, next: NextFunction) => {
  response.status(200).json( await manufacturer_logic.getAllManufacturers())
})

router_manufacturer.get("/:id", async (request: Request, response: Response, next: NextFunction) => {
  const someData = +request.params.id;
  response.status(200).json( await manufacturer_logic.getSingleManufacturers(someData))
})

// sends information to DB
router_manufacturer.post("/add", async (request: Request, response: Response, next: NextFunction) => {
  const someData = request.body;
  response.status(201).json( await manufacturer_logic.addManufacturer(someData))
})





export default router_manufacturer;