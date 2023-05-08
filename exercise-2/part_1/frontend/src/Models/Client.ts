class Client{
    id:number=0;
    name:string="";
    id_card:string="";
    city:string="";
    street:string="";
    building:number=0;
    birth_date:Date=new Date();
    phone:string="";
    cell_phone:string="";
    vaccine_1_date:Date=new Date(0);
    vaccine_1_manufacturer:string="";
    vaccine_2_date:Date=new Date(0);
    vaccine_2_manufacturer:string="";
    vaccine_3_date:Date=new Date(0);
    vaccine_3_manufacturer:string="";
    vaccine_4_date:Date=new Date(0);
    vaccine_4_manufacturer:string="";
    positive_date:Date=new Date(0);
    recovery_date:Date=new Date(0);
    client_img:any='';
}

export default Client;