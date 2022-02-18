import React, {useState} from "react";
import Layout from "../containers/Layout";

export default function Google(){
    const[search, setSearch]=useState()
    return (<Layout><h1>검색</h1>
    <form>
    <div>
    </div>
    <div>
        <label htmlFor=""><b>Search</b></label>
        <input type="text" /><br/>

        <button>Enter</button>
        
    </div>

    <div>
    <span><a></a></span>
    </div>
    </form>
    </Layout>)
    
}

