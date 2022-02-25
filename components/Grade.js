import React, {useState} from "react";
import Layout from "../containers/Layout";

export default function Grade(){
    const[inputs, setInputs]=useState({})
    const[ko, math, en]=inputs;

    const handleChange = e => {
        e.prevenDefault()
        const{value, name} = e.target
        setInputs({
            ...inputs, [name] : value
        })
    }

    const handleClick = e => {
        e.prevenDefault()
        const loginRequest = {ko, math, en}
        alert(`성적표 : ${JSON.stringify(loginRequest)}`)
    }


    return(<Layout> <h1>성적표</h1>
    

    <div>
        <label htmlFor=""><b>국어</b></label>
        <input name="ko" onChange={handleChange} type="text" /><br/>
        <label htmlFor=""><b>수학</b></label>
        <input name="math" onChange={handleChange} type="text" /><br/>
        <label htmlFor=""><b>영어</b></label>
        <input name="en" onChange={handleChange} type="text" /><br/>

        <button onClick={handleClick}>평균</button>
        <div>국어:{ko} 수학:{math} 영어:{en} </div>
    </div>

    </Layout>)
}