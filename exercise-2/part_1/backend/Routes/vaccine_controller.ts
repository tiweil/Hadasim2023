// All the routes that connect the the DB and client.
import express, {NextFunction, Request, Response} from 'express';
import vaccine_logic from '../Logic/vaccine_logic';
import Urls from '../Utils/urls';

// generic router 
const router_vaccine = express.Router();

// gets all
router_vaccine.get("/", async (request: Request, response: Response, next: NextFunction) => {
  response.status(200).json( await vaccine_logic.getAllVaccines())
})

router_vaccine.get("/:id", async (request: Request, response: Response, next: NextFunction) => {
  const someData = +request.params.id;
  response.status(200).json( await vaccine_logic.getSingleVaccine(someData))
})

// sends information to DB
router_vaccine.post("/add", async (request: Request, response: Response, next: NextFunction) => {
  const someData = request.body;
  response.status(201).json( await vaccine_logic.addVaccine(someData))
})





export default router_vaccine;