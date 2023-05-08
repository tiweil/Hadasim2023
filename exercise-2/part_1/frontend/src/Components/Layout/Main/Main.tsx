import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import "./Main.css";
import Client from "../../../Models/Client";

function Main(): JSX.Element {
    const[clients,setClients]=useState<Client[]>([]);
    useEffect(()=>{
        axios.get("http://localhost:3001/client/")
        .then(response=>setClients(response.data));
    },[])
    console.log(clients);
    // console.log(typeof(clients[5]?.vaccine_1_date));
    return (
        <div className="Main">
            <Header/>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>id card</th>
                        <th>city</th>
                        <th>street</th>
                        <th>building</th>
                        <th>birth date</th>
                        <th>phone number</th>
                        <th>cell phone number</th>
                        <th>vaccine 1 date</th>
                        <th>vaccine 1 manufacturer</th>
                        <th>vaccine 2 date</th>
                        <th>vaccine 2 manufacturer</th>
                        <th>vaccine 3 date</th>
                        <th>vaccine 3 manufacturer</th>
                        <th>vaccine 4 date</th>
                        <th>vaccine 4 manufacturer</th>
                        <th>positive date</th>
                        <th>recovery date</th>
                        <th>image</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map((item)=>
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.id_card}</td>
                            <td>{item.city}</td>
                            <td>{item.street}</td>
                            <td>{item.building}</td>
                            <td>{new Date(item.birth_date).toISOString()}</td>
                            <td>{item.phone}</td>
                            <td>{item.cell_phone}</td>
                            <td>{new Date(item.vaccine_1_date).getFullYear()>new Date(0).getFullYear()?new Date(item.vaccine_1_date).toISOString():""}</td>
                            <td>{item.vaccine_1_manufacturer}</td>
                            <td>{new Date(item.vaccine_2_date).getFullYear()>new Date(0).getFullYear()?new Date(item.vaccine_1_date).toISOString():""}</td>
                            <td>{item.vaccine_2_manufacturer}</td>
                            <td>{new Date(item.vaccine_3_date).getFullYear()>new Date(0).getFullYear()?new Date(item.vaccine_1_date).toISOString():""}</td>
                            <td>{item.vaccine_3_manufacturer}</td>
                            <td>{new Date(item.vaccine_4_date).getFullYear()>new Date(0).getFullYear()?new Date(item.vaccine_1_date).toISOString():""}</td>
                            <td>{item.vaccine_4_manufacturer}</td>
                            <td>{new Date(item.positive_date).getFullYear()>new Date(0).getFullYear()?new Date(item.vaccine_1_date).toISOString():""}</td>
                            <td>{new Date(item.recovery_date).getFullYear()>new Date(0).getFullYear()?new Date(item.vaccine_1_date).toISOString():""}</td>
                            <td><img className="image"  src={item.client_img} style={{height:"50%"}}/></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Main;
