import React, {useState} from "react";
import Layout from "../containers/Layout";


export default function Bmi(){
    const[username, setUsername] = useState("")
    const[tall, setTall]=useState(0)
    const[weight, setWeight]= useState(0)
    const[result, setResult]= useState(0)
    const ave =()=>{
        let username = document.getElementById('username').value
        let tall = document.getElementById('tall').value
        let weight = document.getElementById('weight').value
        setUsername(username)
        setTall(tall)
        setWeight(weight)
        
    }

    return(<Layout><h1>BMI 폼</h1>
    

    <div>
        <label htmlFor=""><b>username</b></label>
            <input Id="username" type="text" /><br/>

        <label htmlFor=""><b>tall</b></label>
            <input Id="tall" type="text" /><br/>

        <label htmlFor=""><b>weight</b></label>
            <input Id="weight" type="text" /><br/>

            <button onClick={()=>{(ave())}}>계산</button>
            <div>이름: {username}키: {tall}cm   몸무게: {weight}kg</div>
    </div>
    

    </Layout>)
}