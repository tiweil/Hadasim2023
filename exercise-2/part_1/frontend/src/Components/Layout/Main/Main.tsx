import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./Main.css";
import Client from "../../../Models/Client";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));



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
        <div className="table-container">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="left">name</StyledTableCell>
                            <StyledTableCell align="left">id card</StyledTableCell>
                            <StyledTableCell align="left">city</StyledTableCell>
                            <StyledTableCell align="left">street</StyledTableCell>
                            <StyledTableCell align="left">building</StyledTableCell>
                            <StyledTableCell align="left">birth date</StyledTableCell>
                            <StyledTableCell align="left">phone number</StyledTableCell>
                            <StyledTableCell align="left">cell phone number</StyledTableCell>
                            <StyledTableCell align="left">vaccine 1 date</StyledTableCell>
                            <StyledTableCell align="left">vaccine 1 manufacturer</StyledTableCell>
                            <StyledTableCell align="left">vaccine 2 date</StyledTableCell>
                            <StyledTableCell align="left">vaccine 2 manufacturer</StyledTableCell>
                            <StyledTableCell align="left">vaccine 3 date</StyledTableCell>
                            <StyledTableCell align="left">vaccine 3 manufacturer</StyledTableCell>
                            <StyledTableCell align="left">vaccine 4 date</StyledTableCell>
                            <StyledTableCell align="left">vaccine 4 manufacturer</StyledTableCell>
                            <StyledTableCell align="left">positive date</StyledTableCell>
                            <StyledTableCell align="left">recovery date</StyledTableCell>
                            <StyledTableCell align="left">image</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {clients.map((item) => (
                        <StyledTableRow key={item.id}>
                            <StyledTableCell component="th" scope="row">
                                {item.name}
                            </StyledTableCell>
                            <StyledTableCell align="left">{item.id_card}</StyledTableCell>
                            <StyledTableCell align="left">{item.city}</StyledTableCell>
                            <StyledTableCell align="left">{item.street}</StyledTableCell>
                            <StyledTableCell align="left">{item.building}</StyledTableCell>
                            <StyledTableCell align="left">{new Date(item.birth_date).toISOString()}</StyledTableCell>
                            <StyledTableCell align="left">{item.phone}</StyledTableCell>
                            <StyledTableCell align="left">{item.cell_phone}</StyledTableCell>
                            <StyledTableCell align="left">{item.vaccine_1_date?new Date(item.vaccine_1_date).toISOString():""}</StyledTableCell>
                            <StyledTableCell align="left">{item.vaccine_1_manufacturer}</StyledTableCell>
                            <StyledTableCell align="left">{item.vaccine_2_date?new Date(item.vaccine_1_date).toISOString():""}</StyledTableCell>
                            <StyledTableCell align="left">{item.vaccine_2_manufacturer}</StyledTableCell>
                            <StyledTableCell align="left">{item.vaccine_3_date?new Date(item.vaccine_1_date).toISOString():""}</StyledTableCell>
                            <StyledTableCell align="left">{item.vaccine_3_manufacturer}</StyledTableCell>
                            <StyledTableCell align="left">{item.vaccine_4_date?new Date(item.vaccine_1_date).toISOString():""}</StyledTableCell>
                            <StyledTableCell align="left">{item.vaccine_4_manufacturer}</StyledTableCell>
                            <StyledTableCell align="left">{item.positive_date?new Date(item.vaccine_1_date).toISOString():""}</StyledTableCell>
                            <StyledTableCell align="left">{item.recovery_date?new Date(item.vaccine_1_date).toISOString():""}</StyledTableCell>
                            <StyledTableCell align="left"><img className="image"  src={item.client_img} style={{ width: 50}}/></StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>



        </div>
    );
}

export default Main;
