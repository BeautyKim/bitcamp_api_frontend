import React from "react";
import Layout from "../containers/Layout";
export default function Calc(){
    return(<Layout><h1>계산기 폼</h1>
    <form>
    <div>
    </div>
    <div>
        <label htmlFor=""><b>숫자1</b></label>
        <input type="text" /><br/>
        <label htmlFor=""><b>연산자</b></label>
        <input type="text" /><br/>
        <label htmlFor=""><b>숫자2</b></label>
        <input type="text" /><br/>

        <button>Enter</button>
        
    </div>
    </form>
    </Layout>)

}