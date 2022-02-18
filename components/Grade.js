import React, {useState} from "react";
import Layout from "../containers/Layout";

export default function Grade(){
    const[ko, setKo]=useState(0)
    const[math, setMath]=useState(0)
    const[en, setEn]=useState(0)
    const[result, setResult]=useState()
    const res=()=>{
        let ko =document.getElementById('ko').value
        let math = document.getElementById('math').value
        let en = document.getElementById('en').value
        setKo(ko)
        setMath(math)
        setEn(en)
        setResult((Number(ko)+Number(math)+Number(en))/3)


    }

    return(<Layout> <h1>성적표</h1>
    

    <div>
        <label htmlFor=""><b>국어</b></label>
        <input Id="ko" type="text" /><br/>
        <label htmlFor=""><b>수학</b></label>
        <input Id="math" type="text" /><br/>
        <label htmlFor=""><b>영어</b></label>
        <input Id="en" type="text" /><br/>

        <button onClick={()=>{res()}}>평균</button>
        <div>국어:{ko} 수학:{math} 영어:{en} 평균:{result}</div>
    </div>

    </Layout>)
}