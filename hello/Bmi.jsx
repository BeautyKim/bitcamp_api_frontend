import React from "react";
const Bmi = () => {
    return <><h1>BMI 폼</h1>
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
    
    <div>
        <button>Cancel</button>
    </div>
    </form>
    </>
}
export default Bmi;