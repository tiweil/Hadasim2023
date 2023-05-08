// All logical operations of the backend folder will displayed here.
// importations 
import dal from "../Utils/dal_mysql" 
import { OkPacket } from "mysql";
import Client from "../Models/Client";
/**,
    manufacturer.name AS vaccine_2_manufacturer,
    manufacturer.name AS vaccine_3_manufacturer,
    manufacturer.name AS vaccine_4_manufacturer 
    
            AND client.vaccine_2_manufacturer = manufacturer.id
        AND client.vaccine_3_manufacturer = manufacturer.id
        AND client.vaccine_4_manufacturer = manufacturer.id*/

// functions( async / await ) for getting data from DB
const getAllClients = async (): Promise<Client[]> => {
    // command line for the DB
    const sql = `
    SELECT * FROM client
     `;
    // a promise function that connects us to the database with the command line
    const something = await dal.execute(sql);
    return something;
}

const getSingleClient = async (id:number): Promise<Client> => {
    // command line for the DB
    const sql = `
    SELECT * FROM client
    WHERE client.id=${id};
    `;
    // a promise function that connects us to the database with the command line
    const something = await dal.execute(sql);
    return something;
}

const addClient = async (newClient: Client): Promise<Client> => {
    // command line for the DB
    const sql = `
    INSERT INTO client VALUES 
    (DEFAULT, 
    '${newClient.name}',
    '${newClient.id_card}',
    '${newClient.city}',
    '${newClient.street}',
    ${newClient.building},
    '${newClient.birth_date}',
    '${newClient.phone}',
    '${newClient.cell_phone}',
    '${newClient.vaccine_1_date}',
    '${newClient.vaccine_1_manufacturer}',
    '${newClient.vaccine_2_date}',
    '${newClient.vaccine_2_manufacturer}',
    '${newClient.vaccine_3_date}',
    '${newClient.vaccine_3_manufacturer}',
    '${newClient.vaccine_4_date}',
    '${newClient.vaccine_4_manufacturer}',
    '${newClient.positive_date}',
    '${newClient.recovery_date}',
    '${newClient.client_img}');`;
    const response : OkPacket = await dal.execute(sql);
    newClient.id = response.insertId;
    return newClient;

} 



export default {
    getAllClients,
    getSingleClient,
    addClient,
}