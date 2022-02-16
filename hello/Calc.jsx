import React from "react";
const Calc = () => {
    return <><h>계산기 폼</h>
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

    <div>
    <span><a></a></span>
    </div>
    </form>    
    
    </>
}
export default Calc;