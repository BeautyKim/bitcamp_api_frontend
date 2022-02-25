import React, {useState} from "react";
import Layout from "../containers/Layout";

export default function Login(){

    const[inputs, setInputs]=useState({})
    const[id, pw]=inputs;

    const handleChange = e => {
        e.prevenDefault()
        const{value, name} = e.target
        setInputs({
            ...inputs, [name] : value
        })
    }

    const handleClick = e => {
        e.prevenDefault()
        const loginRequest = {id, pw}
        alert(`로그인 : ${JSON.stringify(loginRequest)}`)
    }





    return (<Layout>
    <form>
    <h1>로그인폼</h1>
   
    <div>
        <label htmlFor=""><b>Username</b></label>
        <input type="text" name="id" onChange={handleChange} placeholder="아이디" maxlength ="10" /><br/>

        <label htmlFor=""><b>Password</b></label>
        <input type="password" name="pw" onChange={handleChange} placeholder="비밀번호" maxlength="8"/><br/>

        <button onClick={handleClick}>Login</button><button>Cancel</button>
        
    </div>
    </form>
    </Layout>)
    
}