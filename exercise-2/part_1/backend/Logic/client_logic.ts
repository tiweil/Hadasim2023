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
    SELECT * FROM client;
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
    //for date type fields that got a null value - we insert to them their default value:
    let vaccine1_default:any= `'${newClient.vaccine_1_date}'`;
    if(!newClient.vaccine_1_date){
        vaccine1_default='DEFAULT';
    }
    let vaccine2_default:any= `'${newClient.vaccine_2_date}'`;
    if(!newClient.vaccine_2_date){
        vaccine2_default='DEFAULT';
    }
    let vaccine3_default:any= `'${newClient.vaccine_3_date}'`;
    if(!newClient.vaccine_3_date){
        vaccine3_default='DEFAULT';
    }
    console.log(vaccine3_default,newClient.vaccine_3_date)

    let vaccine4_default:any= `'${newClient.vaccine_4_date}'`;
    if(!newClient.vaccine_4_date){
        vaccine4_default='DEFAULT';
    }
    console.log(vaccine4_default,newClient.vaccine_4_date)

    let positive_default:any= `'${newClient.positive_date}'`;
    if(!newClient.positive_date){
        positive_default = 'DEFAULT';
    }
    let recovery_default:any= `'${newClient.recovery_date}'`;
    if(!newClient.recovery_date){
        recovery_default='DEFAULT';
    }
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
    ${vaccine1_default},
    '${newClient.vaccine_1_manufacturer}',
    ${vaccine2_default},
    '${newClient.vaccine_2_manufacturer}',
    ${vaccine3_default},
    '${newClient.vaccine_3_manufacturer}',
    ${vaccine4_default},
    '${newClient.vaccine_4_manufacturer}',
    ${positive_default},
    ${recovery_default},
    '${newClient.client_img}');
    `;
    const response : OkPacket = await dal.execute(sql);
    newClient.id = response.insertId;
    return newClient;

} 



export default {
    getAllClients,
    getSingleClient,
    addClient,
}