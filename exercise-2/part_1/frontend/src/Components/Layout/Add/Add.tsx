import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import "./Add.css";
import Client from "../../../Models/Client";
import { Manufacturer } from "../../../Models/Manufacturer";

function Add(): JSX.Element {
    const[manufacturers,setManufacturers]=useState<Manufacturer[]>([]);
    const [file, setFile] = useState("");
    const [alert, setAlert] = useState<Boolean>(false);
    // const [vaccine1,setVaccine1]= useState<Boolean>(false);
    // const [vaccine2,setVaccine2]= useState<Boolean>(false);
    // const [vaccine3,setVaccine3]= useState<Boolean>(false);
    // const [vaccine4,setVaccine4]= useState<Boolean>(false);
    // const [isPositive,setPositive]=useState<Boolean>(false);//if the client was positive to covid 19
    const isPositive=true;
    const vaccine1=true;
    const vaccine2=true;
    const vaccine3=true;
    const vaccine4=true;
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
  const handleChange=(e:any)=>{
        // if(e==="vaccine1"){
        //     setVaccine1(true);
        // }else if(e==="no1"){
        //     setVaccine1(false);
        // }else if(e==="vaccine2"){
        //     setVaccine2(true);
        // }else if(e==="no2"){
        //     setVaccine2(false);
        // }else if(e==="vaccine3"){
        //     setVaccine3(true);
        // }else if(e==="no3"){
        //     setVaccine3(false);
        // }else if(e==="vaccine4"){
        //     setVaccine4(true);
        // }else if(e==="no4"){
        //     setVaccine4(false);
        // }else if(e==="positive"){
        //     setPositive(true);
        // }else if(e==="negative"){
        //     setPositive(false);
        // }
    };
  const vaccine_1 = () => {
    // setVaccine1(true);
    if (vaccine1) {
      return (
        <div>
            <label>vaccine 1 date:</label>
            <input type="date"  {...register("vaccine_1_date")}/>

            <label>manufacturer:</label>
            <select  style={{ height: 30 }} {...register("vaccine_1_manufacturer")}>
                <option disabled value="">Select manufacturer...</option>
                {manufacturers.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
            </select>
            <form>
                <label>have you been vaccinated again?</label><br/>
                <input type="radio" value="vaccine2" id="yes"
                    onChange={handleChange} name="vaccine" />
                <label>Yes</label>
                <input type="radio" value="no2" id="no"
                    onChange={handleChange} name="vaccine" />
                <label>No</label>
            </form>

        </div>
      );
    }
  };
  const vaccine_2 = () => {
    // setVaccine2(true);
    if (vaccine2) {
      return (
        <div>
            <label>vaccine 1 date:</label>
            <input type="date"  {...register("vaccine_2_date")}/>

            <label>manufacturer:</label>
            <select  style={{ height: 30 }} {...register("vaccine_2_manufacturer")}>
                <option disabled value="">Select manufacturer...</option>
                {manufacturers.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
            </select>
            <form>
                <label>have you been vaccinated again?</label><br/>
                <input type="radio" value="vaccine3" id="yes"
                    onChange={handleChange} name="vaccine" />
                <label>Yes</label>
                <input type="radio" value="no3" id="no"
                    onChange={handleChange} name="vaccine" />
                <label>No</label>
            </form>
        </div>
      );
    }
  };
  const vaccine_3 = () => {
    // setVaccine3(true);
    if (vaccine3) {
      return (
        <div>
            <label>vaccine 1 date:</label>
            <input type="date"  {...register("vaccine_3_date")}/>

            <label>manufacturer:</label>
            <select  style={{ height: 30 }} {...register("vaccine_3_manufacturer")}>
                <option disabled value="">Select manufacturer...</option>
                {manufacturers.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
            </select>
            <form>
                <label>have you been vaccinated again?</label><br/>
                <input type="radio" value="vaccine4" id="yes"
                    onChange={handleChange} name="vaccine" />
                <label>Yes</label>
                <input type="radio" value="no4" id="no"
                    onChange={handleChange} name="vaccine" />
                <label>No</label>
            </form>
        </div>
      );
    }
  };
  const vaccine_4 = () => {
    // setVaccine4(true);
    if (vaccine4) {
      return (
        <div>
            <label>vaccine 1 date:</label>
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

  const coronaForm=()=>{
    // setPositive(true);
    if(isPositive){
        return(
            <div>
                <label>date of receiving a positive result:</label>
                <input
                    className="form-control"
                    type="date"
                    required
                    {...register("positive_date")}
                />
                <label>recovery date:</label>
                <input
                    className="form-control"
                    type="date"
                    required
                    {...register("recovery_date")}
                />
            </div>
        )
    }
  }

    const send=async(newClient:Client)=>{
        if (newClient.client_img[0]?.size > 57000) {
            console.log("Image size must be smaller than 530KB",newClient.client_img[0]?.size)
        } else{
            try {
                console.log(newClient.client_img[0]);
                console.log(await getBase64(newClient.client_img[0]));
                setFile(await getBase64(newClient.client_img[0]));
                newClient.client_img= await getBase64(newClient.client_img[0]);
              } catch (err: any) {
                console.log(err.message);
              }
          }

        try{
            axios.post("http://localhost:3001/client/add",newClient)
            .then(res=>navigate("/"));
        }catch(err:any){
            console.log(err.message);
        }
    }

    return (
        <div className="Add">
            <Header/>

			<div className="Box">
                <form onSubmit={handleSubmit(send)}>
                    <h2>add Client</h2>

                    <label>name:</label>
                    <input type="text"  {...register("name")}/>

                    <label>ID:</label>
                    <input type="text"  {...register("id_card")}/>

                    <label>city:</label>
                    <input type="text"  {...register("city")}/>

                    <label>street:</label>
                    <input type="text"  {...register("street")}/>

                    <label>building:</label>
                    <input type="text"  {...register("building")}/>

                    <label>birth date:</label>
                    <input
                        className="form-control"
                        type="date"
                        required
                        {...register("birth_date")}
                    />

                    <label>phone number:</label>
                    <input type="text"  {...register("phone")}/>


                    <label>cell phone number:</label>
                    <input type="text"  {...register("cell_phone")}/>

                    <form>
                        <label>have you been vaccinated?</label><br/>
                        <input type="radio" value="vaccine1" id="yes"
                            onChange={handleChange} name="vaccine" />
                        <label>Yes</label>
                        <input type="radio" value="no1" id="no"
                            onChange={handleChange} name="vaccine" />
                        <label>No</label>
                    </form>

                    <div>{vaccine_1()}</div>
                    <div>{vaccine_2()}</div>
                    <div>{vaccine_3()}</div>
                    <div>{vaccine_4()}</div>

                    <form>
                        <label>Have you been positive for Corona in the past?</label><br/>
                        <input type="radio" value="positive" id="yes"
                            onChange={handleChange} name="corona" />
                        <label>Yes</label>
                        <input type="radio" value="negative" id="no"
                            onChange={handleChange} name="corona" />
                        <label>No</label>
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