import React, {useState} from "react";
import { memberGrade } from "../api";
import Layout from "../containers/Layout";

export default function Grade(){
    const[inputs, setInputs]=useState({})
    const[result, setResult] = useState('')
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
        const gradeRequest = {ko, math, en}
        memberGrade({ko, math, en}).then( res => setResult(res.data))
        .catch( err => console.log(`에러발생 : ${err}`))
    }


    return(<Layout> <h1>성적표</h1>
    <form>

    <div>
        <label htmlFor=""><b>국어</b></label>
        <input name="ko" onChange={handleChange} type="text" /><br/>
        <label htmlFor=""><b>수학</b></label>
        <input name="math" onChange={handleChange} type="text" /><br/>
        <label htmlFor=""><b>영어</b></label>
        <input name="en" onChange={handleChange} type="text" /><br/>

        <button onClick={handleClick}>평균</button>
        
    </div>
    </form>

    <div>성적 평균: {result}</div>
    </Layout>)
}