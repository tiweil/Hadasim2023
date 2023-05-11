import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import "./Add.css";
import Client from "../../../Models/Client";
import { Manufacturer } from "../../../Models/Manufacturer";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


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
            <label>vaccine 1 date:</label>
            <input type="date"              
                {...register("vaccine_1_date")}
            />

            <label>manufacturer:</label>
            <select  style={{ height: 30 }} {...register("vaccine_1_manufacturer")}>
                <option disabled value="">Select manufacturer...</option>
                {manufacturers.map(item => <option key={item.id} value={item.name}>{item.name}</option>)}
            </select>
            
            <label>have you been vaccinated again?</label><br/>
            <input type="radio" value="vaccine2" id="yes"
                onChange={handleChange} name="vaccine" />
            <label htmlFor="yes">Yes</label>
            <input type="radio" value="no2" id="no"
                onChange={handleChange} name="vaccine" />
            <label htmlFor="no">No</label>
            

        </div>
      );
    }
  };
    //in case the user says that he was vaccinated for the 2nd time this field will shown up
  const vaccine_2 = () => {
    if (vaccine2) {
      return (
        <div>
            <label>vaccine 2 date:</label>
            <input type="date"  {...register("vaccine_2_date")}/>

            <label>manufacturer:</label>
            <select  style={{ height: 30 }} {...register("vaccine_2_manufacturer")}>
                <option disabled value="">Select manufacturer...</option>
                {manufacturers.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
            </select>
                <label>have you been vaccinated again?</label><br/>
                <input type="radio" value="vaccine3" id="yes"
                    onChange={handleChange} name="vaccine" />
                <label htmlFor="yes">Yes</label>
                <input type="radio" value="no3" id="no"
                    onChange={handleChange} name="vaccine" />
                <label htmlFor="no">No</label>
        </div>
      );
    }
  };
//in case the user says that he was vaccinated for the 3rd time this field will shown up
  const vaccine_3 = () => {
    if (vaccine3) {
      return (
        <div>
            <label>vaccine 3 date:</label>
            <input type="date"  {...register("vaccine_3_date")}/>

            <label>manufacturer:</label>
            <select  style={{ height: 30 }} {...register("vaccine_3_manufacturer")}>
                <option disabled value="">Select manufacturer...</option>
                {manufacturers.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
            </select>
                <label>have you been vaccinated again?</label><br/>
                <input type="radio" value="vaccine4" id="yes"
                    onChange={handleChange} name="vaccine" />
                <label htmlFor="yes">Yes</label>
                <input type="radio" value="no4" id="no"
                    onChange={handleChange} name="vaccine" />
                <label htmlFor="no">No</label>
        </div>
      );
    }
  };
  //in case the user says that he was vaccinated for the 4th time this field will shown up
  const vaccine_4 = () => {
    if (vaccine4) {
      return (
        <div>
            <label>vaccine 4 date:</label>
            <input type="date"  {...register("vaccine_4_date")}/>

            <label>manufacturer:</label>
            <select  style={{ height: 30 }} {...register("vaccine_4_manufacturer")}>
                <option disabled value="">Select manufacturer...</option>
                {manufacturers.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
            </select>
        </div>
      );
    }
  };
//in case the user says that he was found positive to the covid 19 this field will shown up
  const coronaForm=()=>{
    if(isPositive){
        return(
            <div>
                <label>date of receiving a positive result:</label>
                <input
                    className="form-control"
                    type="date"
                    {...register("positive_date")}
                />
                <label>recovery date:</label>
                <input
                    className="form-control"
                    type="date"
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
            <form onSubmit={handleSubmit(send)}>
                <Box
                    component="form"
                    sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                        required
                        id="standard-required"
                        label="name"
                        variant="standard"
                        {...register("name")}
                        />

                    </div>
                </Box>
            </form>

            
			<div className="Box">
                    <h2>add Client</h2>
                    <form onSubmit={handleSubmit(send)}>

                    <label>name:</label>
                    <input type="text"  {...register("name")} required/>

                    <label>ID:</label>
                    <input type="text"  {...register("id_card")} required/>

                    <label>city:</label>
                    <input type="text"  {...register("city")} required/>

                    <label>street:</label>
                    <input type="text"  {...register("street")} required/>

                    <label>building:</label>
                    <input type="number"  {...register("building")} required/>

                    <label>birth date:</label>
                    <input
                        className="form-control"
                        type="date"
                        required
                        {...register("birth_date")}
                    />

                    <label>phone number:</label>
                    <input type="text"  {...register("phone")} required/>


                    <label>cell phone number:</label>
                    <input type="text"  {...register("cell_phone")} required/>

                    <form>
                        <label>have you been vaccinated?</label><br/>
                        <input type="radio" value="vaccine1" id="yes"
                            onChange={handleChange} name="vaccine" />
                        <label htmlFor="yes">Yes</label>
                        <input type="radio" value="no1" id="no" 
                            onChange={handleChange} name="vaccine" />
                        <label htmlFor="no">No</label>
                    </form>

                    <div>{vaccine_1()}</div>
                    <div>{vaccine_2()}</div>
                    <div>{vaccine_3()}</div>
                    <div>{vaccine_4()}</div>

                    <form>
                        <label>Have you been positive for Corona in the past?</label><br/>
                        <input type="radio" value="positive" id="yes"
                            onChange={handleChange} name="corona" />
                        <label htmlFor="yes">Yes</label>
                        <input type="radio" value="negative" id="no"
                            onChange={handleChange} name="corona" />
                        <label htmlFor="no">No</label>
                    </form>

                    <div>{coronaForm()}</div>

                    <label>image of the client</label>
                    <input
                        className="form-control"
                        type="file"
                        {...register("client_img")}
                    />

                    <input type="submit" value="save client" style={{ height: 50, backgroundColor: "lightgreen", borderRadius: 20 }} />

                </form>
            </div>

        </div>
    );
}

export default Add;
