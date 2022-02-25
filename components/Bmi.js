import React, {useState} from "react";
import Layout from "../containers/Layout";
import {memberBmi} from '../api/index'



export default function Bmi(){
    
    const[inputs, setInputs] = useState({})
    const[result, setResult] = useState('')
    const{ name, height, weight}= inputs;//구조분해할당(Object Destructuring)

     const handleChange=(e)=>{
        e.preventDefault()
         const{value, name} = e.target;
         setInputs({
             ...inputs, [name]: value
         })
     }

        const handleClick = (e)=>{
            e.preventDefault()
            const bmiRequest = {name, weight, height}
            memberBmi({name, weight, height}).then( res => {alert(res.data)})
            .catch( err => console.log(`에러발생 : ${err}`))
    
        }
        
    return(<Layout>
        <form>
        <h1>BMI 폼</h1>
    

    <div>
        <label htmlFor=""><b>name</b></label>
            <input type="text" name="name" onChange={handleChange}/><br/>

        <label htmlFor=""><b>height</b></label>
            <input type="text" name="height" onChange={handleChange}/><br/>

        <label htmlFor=""><b>weight</b></label>
            <input type="text" name="weight" onChange={handleChange}/><br/>

            <button onClick={handleClick}>BMI체크</button>


    </div>
    </form>
    <div>결과: {result}</div>

    </Layout>)
}