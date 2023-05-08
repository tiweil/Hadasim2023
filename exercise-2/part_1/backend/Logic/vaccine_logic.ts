// All logical operations of the backend folder will displayed here.
// importations 
import { Vaccine } from "../Models/Vaccine";
import dal from "../Utils/dal_mysql" 
import { OkPacket } from "mysql";


// functions( async / await ) for getting data from DB
const getAllVaccines = async (): Promise<Vaccine[]> => {
    // command line for the DB
    const sql = `
        SELECT vaccine.* , manufacturer.name AS manufacturer
        FROM vaccine JOIN manufacturer
        ON vaccine.manufacturer = manufacturer.id;
        
    `;
    // a promise function that connects us to the database with the command line
    const vaccine = await dal.execute(sql);
    return vaccine;
}

const getSingleVaccine = async (id:number): Promise<Vaccine> => {
    // command line for the DB
    const sql = `
    SELECT vaccine.* , manufacturer.name AS manufacturer
    FROM vaccine JOIN manufacturer
    ON vaccine.manufacturer = manufacturer.id
    WHERE vaccine.id=${id};
    `;
    // a promise function that connects us to the database with the command line
    const vaccine = await dal.execute(sql);
    return vaccine;
}

const addVaccine = async (newVaccine: Vaccine): Promise<Vaccine> => {
    // command line for the DB
    const sql = `
    INSERT INTO vaccine VALUES 
    (DEFAULT,
    ${newVaccine.manufacturer},
    '${newVaccine.vaccination_date}');`;
    const response : OkPacket = await dal.execute(sql);
    newVaccine.id = response.insertId;
    return newVaccine;

} 


export default {
    getAllVaccines,
    getSingleVaccine,
    addVaccine,
     

}