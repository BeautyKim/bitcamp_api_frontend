import React, {useState} from "react";
import Layout from "../containers/Layout";

export default function Grade(){
    const[ko, setKo]=useState(0)
    const[math, setMath]=useState(0)
    const[en, setEn]=useState(0)

    return(<Layout> <h1>성적표</h1>
    <form>
    <div>
    </div>
    <div>
        <label htmlFor=""><b>Ko</b></label>
        <input type="text" /><br/>
        <label htmlFor=""><b>Math</b></label>
        <input type="text" /><br/>
        <label htmlFor=""><b>En</b></label>
        <input type="text" /><br/>

        <button>Enter</button>
        
    </div>

    <div>
    <span><a></a></span>
    </div>
    </form>
    </Layout>)
}