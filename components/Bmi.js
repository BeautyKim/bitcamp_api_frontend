import React, {useState} from "react";
import Layout from "../containers/Layout";


export default function Bmi(){
    const[username, setUsername] = useState()
    const[tall, setTall]=useState()
    const[weight, setWeight]= useState()
    return(<Layout><h1>BMI 폼</h1>
    <form>

    <div>
        <label htmlFor=""><b>username</b></label>
            <input type="text" /><br/>

        <label htmlFor=""><b>tall</b></label>
            <input type="text" /><br/>

        <label htmlFor=""><b>weight</b></label>
            <input type="text" /><br/>
    </div>
    
    </form>
    </Layout>)
}