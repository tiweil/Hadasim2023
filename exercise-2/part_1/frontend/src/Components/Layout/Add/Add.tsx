import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import "./Add.css";
import Client from "../../../Models/Client";
import { Manufacturer } from "../../../Models/Manufacturer";
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button } from "@mui/material";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

function Add(): JSX.Element {
    const[manufacturers,setManufacturers]=useState<Manufacturer[]>([]);
    const [file, setFile] = useState("");
    const [vaccine1,setVaccine1]= useState<Boolean>(false);
    const [vaccine2,setVaccine2]= useState<Boolean>(false);
    const [vaccine3,setVaccine3]= useState<Boolean>(false);
    const [vaccine4,setVaccine4]= useState<Boolean>(false);
    const [isPositive,setPositive]=useState<Boolean>(false);//if the client was positive to covid 19

    const { register, handleSubmit } = useForm<Client>();
    const navigate = useNavigate();
    // const [problem,setProblems]=useState<Problem[]>([]);
    useEffect(()=>{
        axios.get("http://localhost:3001/manufacturer")
        .then(response=>setManufacturers(response.data));

    },[])


  //convert a file to string
  const getBase64 = (file: any): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        console.log(reader.result);
        resolve(reader.result?.toString());
      };
      reader.onerror = function (error) {
        reject(error);
      };
    });
  };
  const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        if(event.target.value==="vaccine1"){
            setVaccine1(true);
        }else if(event.target.value==="no1"){
            setVaccine1(false);
        }else if(event.target.value==="vaccine2"){
            setVaccine2(true);
        }else if(event.target.value==="no2"){
            setVaccine2(false);
        }else if(event.target.value==="vaccine3"){
            setVaccine3(true);
        }else if(event.target.value==="no3"){
            setVaccine3(false);
        }else if(event.target.value==="vaccine4"){
            setVaccine4(true);
        }else if(event.target.value==="no4"){
            setVaccine4(false);
        }else if(event.target.value==="positive"){
            setPositive(true);
        }else if(event.target.value==="negative"){
            setPositive(false);
        }
    };
  //in case the user says that he was vaccinated for the first time this field will shown up
  const vaccine_1 = () => {
    // setVaccine1(true);
    if (vaccine1) {
      return (
        <div>
            <TextField
                    id="standard-required"
                    label="date of vaccine 1"
                    defaultValue=""
                    variant="standard"
                    type="date"
                    InputLabelProps={{
                    shrink: true,
                      }}
                    {...register("vaccine_1_date")}
                />
            <div>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Manufacturer</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="Manufacturer"
                        {...register("vaccine_1_manufacturer")}
                    >
                        {manufacturers.map(item => <MenuItem key={item.id} value={item.name} {...register("vaccine_1_manufacturer")}>{item.name}</MenuItem>)}
                    </Select>
                </FormControl>
            </div>    

            <div>
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">have you been vaccinated again?</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            onChange={handleChange}
                            defaultValue="no2"
                        >
                        <   FormControlLabel value="vaccine2" control={<Radio />} label="Yes"  />
                            <FormControlLabel value="no2" control={<Radio />} label="No" />
                        </RadioGroup>
                </FormControl>
            </div>

            

        </div>
      );
    }
  };
    //in case the user says that he was vaccinated for the 2nd time this field will shown up
  const vaccine_2 = () => {
    if (vaccine2) {
      return (
        <div>
            <TextField
                    id="standard-required"
                    label="date of vaccine 2"
                    defaultValue=""
                    variant="standard"
                    type="date"
                    InputLabelProps={{
                    shrink: true,
                      }}
                    {...register("vaccine_2_date")}
                />
            <div>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Manufacturer</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="Manufacturer"
                        {...register("vaccine_2_manufacturer")}
                    >
                        {manufacturers.map(item => <MenuItem key={item.id} value={item.name} {...register("vaccine_2_manufacturer")}>{item.name}</MenuItem>)}

                    </Select>
                </FormControl>
            </div>

            <div>
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">have you been vaccinated again?</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            onChange={handleChange}
                            defaultValue="no3"
                        >
                        <   FormControlLabel value="vaccine3" control={<Radio />} label="Yes"  />
                            <FormControlLabel value="no3" control={<Radio />} label="No" />
                        </RadioGroup>
                </FormControl>
            </div>

        </div>
      );
    }
  };
//in case the user says that he was vaccinated for the 3rd time this field will shown up
  const vaccine_3 = () => {
    if (vaccine3) {
      return (
        <div>
            <TextField
                    id="standard-required"
                    label="date of vaccine 3"
                    variant="standard"
                    type="date"
                    InputLabelProps={{
                    shrink: true,
                      }}
                    {...register("vaccine_3_date")}
                />
            <div>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Manufacturer</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="Manufacturer"
                        {...register("vaccine_3_manufacturer")}                        
                    >
                        {manufacturers.map(item => <MenuItem key={item.id} value={item.name} {...register("vaccine_3_manufacturer")}>{item.name}</MenuItem>)}

                    </Select>
                </FormControl>
            </div>

            <div>
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">have you been vaccinated again?</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            onChange={handleChange}
                            defaultValue="no4"
                        >
                        <   FormControlLabel value="vaccine4" control={<Radio />} label="Yes"  />
                            <FormControlLabel value="no4" control={<Radio />} label="No" />
                        </RadioGroup>
                </FormControl>
            </div>


        </div>
      );
    }
  };
  //in case the user says that he was vaccinated for the 4th time this field will shown up
  const vaccine_4 = () => {
    if (vaccine4) {
      return (
        <div>
            <TextField
                    id="standard-required"
                    label="date of vaccine 4"
                    variant="standard"
                    type="date"
                    InputLabelProps={{
                    shrink: true,
                      }}
                    {...register("vaccine_4_date")}
                />
            <div>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Manufacturer</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="Manufacturer"
                        {...register("vaccine_4_manufacturer")}
                    >
                        {manufacturers.map(item => <MenuItem key={item.id} value={item.name} {...register("vaccine_4_manufacturer")}>{item.name}</MenuItem>)}
                    </Select>
                </FormControl>
            </div>
        </div>
      );
    }
  };
//in case the user says that he was found positive to the covid 19 this field will shown up
  const coronaForm=()=>{
    if(isPositive){
        return(
            <div>
                <TextField
                    id="standard-required"
                    label="date of receiving a positive result"
                    variant="standard"
                    type="date"
                    InputLabelProps={{
                    shrink: true,
                      }}
                    {...register("positive_date")}
                />
                <TextField
                    id="standard-required"
                    label="recovery date"
                    variant="standard"
                    type="date"
                    InputLabelProps={{
                    shrink: true,
                      }}
                    {...register("recovery_date")}
                />
            </div>
        )
    }
  }

 

//after submit the information will send to the new client class and will go to the database
    const send=async(newClient:Client)=>{
        if (newClient.client_img[0]?.size > 57000) {
            console.log("Image size must be smaller than 530KB",newClient.client_img[0]?.size)
            // newClient.client_img[0]= await compressImage(newClient.client_img[0]);
        } else{
            try {
                // console.log(newClient.client_img[0]);
                // console.log(await getBase64(newClient.client_img[0]));
                //convert the file of image to string so it can be insert to the proper field in the database
                setFile(await getBase64(newClient.client_img[0]));
                newClient.client_img= await getBase64(newClient.client_img[0]);
              } catch (err: any) {
                console.log(err.message);
              }
            try{
                //the fields that didnt filled - will be filled automatically
                newClient.vaccine_1_date=
                    newClient.vaccine_1_date||null;
                newClient.vaccine_1_manufacturer=
                    newClient.vaccine_1_manufacturer|| "";
                newClient.vaccine_2_date=
                    newClient.vaccine_2_date||null;
                newClient.vaccine_2_manufacturer=
                    newClient.vaccine_2_manufacturer|| "";       
                newClient.vaccine_3_date=
                    newClient.vaccine_3_date||null;
                newClient.vaccine_3_manufacturer=
                    newClient.vaccine_3_manufacturer|| "";   
                newClient.vaccine_4_date=
                    newClient.vaccine_4_date||null;
                newClient.vaccine_4_manufacturer=
                    newClient.vaccine_4_manufacturer|| "";  
                newClient.positive_date=
                    newClient.positive_date||null; 
                newClient.recovery_date=
                    newClient.recovery_date||null;
                newClient.client_img=
                    newClient.client_img||"";
                axios.post("http://localhost:3001/client/add",newClient)
                .then(res=>navigate("/"));
            }catch(err:any){
                console.log(err.message);
            }
        }


    }

    return (
        <div className="Add">
            <Header/>
            <div className="card-container">
                <h2>Add a client</h2>
                <form onSubmit={handleSubmit(send)}>
                        <div>
                            <div>
                                <span><TextField
                                    required
                                    id="standard-required"
                                    label="name"
                                    variant="standard"
                                    type="text"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    sx={{mb:2}}
                                    {...register("name")}
                                /></span>
                                <span><TextField
                                    required
                                    id="standard-required"
                                    label="ID"
                                    variant="standard"
                                    type="text"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    sx={{mb:2}}
                                    {...register("id_card")}
                                /></span>
                                <span><TextField
                                    required
                                    id="standard-required"
                                    label="city"
                                    variant="standard"
                                    type="text"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    {...register("city")}
                                /></span>
                            </div>
                            <div>
                                <span><TextField
                                    required
                                    id="standard-required"
                                    label="street"
                                    variant="standard"
                                    type="text"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    {...register("street")}
                                /></span>
                                <span><TextField
                                    required
                                    id="standard-required"
                                    label="building"
                                    variant="standard"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    {...register("building")}
                                /></span>
                                <span><TextField
                                    required
                                    id="standard-required"
                                    label="birth date"
                                    defaultValue=""
                                    variant="standard"
                                    type="date"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    {...register("birth_date")}
                                /></span>
                            </div><br/>
                            <div>
                                <span><TextField
                                    required
                                    id="standard-required"
                                    label="phone number"
                                    variant="standard"
                                    type="text"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    {...register("phone")}
                                /></span>
                                <span><TextField
                                    required
                                    id="standard-required"
                                    label="CellPhone number"
                                    variant="standard"
                                    type="text"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    {...register("cell_phone")}
                                /></span>
                            </div>
                            <div>
                                <FormControl>
                                    <FormLabel id="demo-row-radio-buttons-group-label">have you been vaccinated?</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        onChange={handleChange}
                                        defaultValue="no1"
                                    >
                                        <FormControlLabel value="vaccine1" control={<Radio />} label="Yes"  />
                                        <FormControlLabel value="no1" control={<Radio />} label="No" />
                                    </RadioGroup>
                                </FormControl>                   
                            </div>

                            <div>{vaccine_1()}</div>
                            <div>{vaccine_2()}</div>
                            <div>{vaccine_3()}</div>
                            <div>{vaccine_4()}</div>

                            <div>
                                <FormControl>
                                    <FormLabel id="demo-row-radio-buttons-group-label">Have you been positive for Corona in the past?</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        onChange={handleChange}
                                        defaultValue="negative"
                                    >
                                        <FormControlLabel value="positive" control={<Radio />} label="Yes"  />
                                        <FormControlLabel value="negative" control={<Radio />} label="No" />
                                    </RadioGroup>
                                </FormControl>
                            </div>

                            <div>{coronaForm()}</div>
                            <br/>
                            <div>
                                <label className='img'>upload client's image</label><br/>
                                <input
                                    className="form-control"
                                    type="file"
                                    {...register("client_img")}
                                />
                            </div><br/>
                            <div className="submitted">
                                <Button variant="contained" type="submit"  color="success">
                                    submit
                                </Button> 

                            </div>

                        </div>
                </form>
            </div>

        </div>
    );
}

export default Add;
