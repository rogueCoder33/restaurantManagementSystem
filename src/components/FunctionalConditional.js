import React, {useState, useEffect} from "react";

function FunctionConditional(props){

    //const [color, setColor] = useState(props.color);
    const [num, setNum] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setNum((num) => num + 1)
        }, 4000)
    }, []);

    // function setdelay(){
    //     setTimeout(() => {
    //         setColor("violet")
    //     }, 4000);
    // }
    
    return(

        <div>
            <p>this is {num}</p>
            <button type="button" onClick={() => setNum(num+1)}> change LAP </button>
        </div>

    );
   

}

export default FunctionConditional;