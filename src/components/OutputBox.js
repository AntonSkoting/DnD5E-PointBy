import React from "react";

function OutputBox({value, color}) {

    if(!color) color = 'white';

    return <div style={{
        width: '2.38rem', 
        height: '1.2rem',
        border: '1px solid gray', 
        //borderRadius: '2px',
        display: 'inline-block', 
        lineHeight: '1.1rem',
        textAlign: 'center',
        backgroundColor: color
    }} className="OutputBox">{value}</div>
}

export default OutputBox;