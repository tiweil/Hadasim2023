// All logical operations of the backend folder will displayed here.
// importations 
import dal from "../Utils/dal_mysql"
import { Manufacturer } from "../Models/Manufacturer"
import { OkPacket } from "mysql";


// functions( async / await ) for getting data from DB
const getAllManufacturers = async (): Promise<Manufacturer> => {
    // command line for the DB
    const sql = `
        SELECT * FROM manufacturer;
    `;
    // a promise function that connects us to the database with the command line
    const manufacturer = await dal.execute(sql);
    return manufacturer;
}
const getSingleManufacturers = async (id:number): Promise<Manufacturer> => {
    // command line for the DB
    const sql = `
        SELECT * FROM manufacturer
        WHERE manufacturer.id=${id};
    `;
    // a promise function that connects us to the database with the command line
    const manufacturer = await dal.execute(sql);
    return manufacturer;
}

const addManufacturer = async (manufacturer: Manufacturer): Promise<Manufacturer> => {
    // command line for the DB
    const sql = `
    INSERT INTO manufacturer VALUES
    (DEFAULT,
    '${manufacturer.name}');`;
    const response : OkPacket = await dal.execute(sql);
    manufacturer.id = response.insertId;
    return manufacturer;

} 



// exporting 
export default {
    getAllManufacturers,
    getSingleManufacturers,
    addManufacturer,
}