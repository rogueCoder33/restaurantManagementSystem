import React, {useState, useEffect} from "react";

function FunctionConditional(props){

    const [num, setNum] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setNum((num) => num + 1)
        }, props.number)
    }, []);
    
    return(

        <div>
            <p>this is {num}</p>
            <button type="button" onClick={() => setNum(num+1)}> change LAP </button>
        </div>

    );
   

}

export default FunctionConditional;