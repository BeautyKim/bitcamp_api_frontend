import React from "react";
import Layout from "../containers/Layout";

export default function Grade(){
    return(<Layout> <h1>성적표</h1>
    <form>
    <div>
    </div>
    <div>
        <label htmlFor=""><b>국어</b></label>
        <input type="text" /><br/>
        <label htmlFor=""><b>수학</b></label>
        <input type="text" /><br/>
        <label htmlFor=""><b>영어</b></label>
        <input type="text" /><br/>

        <button>Enter</button>
        
    </div>

    <div>
    <span><a></a></span>
    </div>
    </form>
    </Layout>)
}