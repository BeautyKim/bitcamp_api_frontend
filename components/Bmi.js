import React from "react";
import Layout from "../containers/Layout";


export default function Bmi(){
    return(<Layout><h1>BMI 폼</h1>
    <form>
    <div>
    </div>

    <div>
        <label htmlFor=""><b>Username</b></label>
            <input type="text" /><br/>

        <label htmlFor=""><b>Tall</b></label>
            <input type="text" /><br/>

        <label htmlFor=""><b>Weight</b></label>
            <input type="text" /><br/>
    </div>
    
    </form>
    </Layout>)
}