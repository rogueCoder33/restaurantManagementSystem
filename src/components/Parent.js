import React from "react";
import appContext from "./Context";
import Child from "./Child";

function Parent(props){

    const data = {
        name: 'placeholder',
        role: 'placeholder'
    };

    return (
        <appContext.Provider value={data}>
            <Child/>
        </appContext.Provider>
    );

}

export default Parent;