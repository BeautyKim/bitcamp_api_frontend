import React, {useState} from "react";
import Layout from "../containers/Layout";

export default function Google(){
    const[inputs, setInputs]=useState({})
    const{search}=inputs;

    const handleChange=(e)=>{
        e.preventDefault()
        const{value, name} = e.target;
        setInputs({
            ...inputs, [name]: value
        })
    }
    const handleClick = (e)=>{
        e.preventDefault()
        const googleRequest = {search}
        alert(`검색: ${JSON.stringify(googleRequest)}`)
    }

    return (<Layout><h1>검색</h1>
    <form>
    <div>
        <label htmlFor=""><b>Search</b></label>
        <input type="text" name="search" onChange={handleChange} /><br/>

        <button onClick={handleClick}>Enter</button>
        
    </div>
    </form>
    </Layout>)
    
}

