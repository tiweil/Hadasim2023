import dal_mysql from "../Utils/dal_mysql";

const client_sql=`CREATE TABLE IF NOT EXISTS client (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NULL,
    id_card VARCHAR(45) NULL,
    city VARCHAR(45) NULL,
    street VARCHAR(45) NULL,
    building INT NULL,
    birth_date DATE NULL,
    phone VARCHAR(45) NULL,
    cell_phone VARCHAR(45) NULL,
    vaccine_1_date DATE NULL,
    vaccine_1_manufacturer VARCHAR(45) NULL,
    vaccine_2_date DATE NULL,
    vaccine_2_manufacturer VARCHAR(45) NULL,
    vaccine_3_date DATE NULL,
    vaccine_3_manufacturer VARCHAR(45) NULL,
    vaccine_4_date DATE NULL,
    vaccine_4_manufacturer VARCHAR(45) NULL,
    positive_date DATE NULL,
    recovery_date DATE NULL,
    client_img LONGTEXT NULL,
    PRIMARY KEY (id));`;


const manufacturer=`CREATE TABLE IF NOT EXISTS manufacturer (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NULL,
    PRIMARY KEY (id));`;



const sql_init=()=>{
    dal_mysql.execute(client_sql);
    dal_mysql.execute(manufacturer);
}   

export default sql_init;