import React from "react";
import OutputBox from "./OutputBox";

function ArrayOutput({values, color}) {
    return (
        <div className="ArrayOutput">
            {values.map((value, index) => {
                return <OutputBox value={value} color={color} key={index} />
            })}
        </div>
    );
};

export default ArrayOutput;