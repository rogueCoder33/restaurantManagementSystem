import React, { useContext } from "react";
import appContext from "./Context";


function Child(props){
    const data = useContext(appContext);

    return (
        <div>
            {data.name} and he is {data.role}
        </div>
    );
}

export default Child;