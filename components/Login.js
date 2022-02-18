import React, {useState} from "react";
import Layout from "../containers/Layout";

export default function Login(){
    const[username, setUsername]=useState()
    const[password, setPassword]=useState()
    return (<Layout><h1>로그인폼</h1>
    <form>
    <div>
    </div>
    <div>
        <label htmlFor=""><b>Username</b></label>
        <input type="text" placeholder="아이디" maxlength ="10" /><br/>

        <label htmlFor=""><b>Password</b></label>
        <input type="password" placeholder="비밀번호" maxlength="8"/><br/>

        <button>Login</button><button>Cancel</button>
        
    </div>

    <div>
    <span><a></a></span>
    </div>
    </form>
    </Layout>)
    
}