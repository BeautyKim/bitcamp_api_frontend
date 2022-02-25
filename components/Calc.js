import React, {useState} from "react";
import { memberCalc } from "../api";
import Layout from "../containers/Layout";

export default function Calc(){
    const[inputs, setInputs] = useState({})
    const[result, setResult] = useState('')
    const{ num1, num2, opcode}=inputs;

    const handleChange=(e)=>{
        e.preventDefault()
        const{value, name} = e.target;
        setInputs({
            ...inputs, [name]: value
        })
    }
    const handleClick = (e)=>{
        e.preventDefault()
        const calcRequest = {num1, opcode, num2}
        memberCalc({num1, opcode, num2}).then(res => setResult(res.data)).catch( err => console.log(`에러발생 : ${err}`))
    }

    
        /*const sum = () => {
        let num1 = document.getElementById('num1').value
        console.log('숫자1 :' +num1)
        let num2 = document.getElementById('num2').value
        console.log('숫자2 :' +num2)
    
        setResult(Number(num1)+Number(num2))
        
    }*/

    return(<Layout><h1>계산기 폼</h1>
    <form>
    <div>
    
        <label htmlFor=""><b>num1</b></label>
        <input name="num1"  type="" onChange={handleChange}/><br/>

        <label htmlFor=""><b>opcode</b></label>

        <select type="" name="opcode" onChange={handleChange}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
            <option value="%">%</option>
        </select><br/>
        
        <label htmlFor=""><b>num2</b></label>
        <input name="num2" type="" onChange={handleChange}/><br/>
        
        
        

        <button onClick={handleClick}>전송</button>
        </div>
        </form>

        <div>계산결과: {result}</div>
    </Layout>)

}