import React from "react";

function ArrayInput({ min, max, values, onChange }) {

    function onChangeNum(event, key) {
        let newValue = Number.parseInt(event.target.value);
        if(!newValue) newValue = min;
        newValue = Math.max(min, newValue);
        newValue = Math.min(max, newValue);
        onChange(values.map((value, index) => {
            if(index === key) return newValue;
            else return value;
        }));
    };

    return (
        <div className="ArrayInput">
            {values.map((value, index) => {
                return <input type="number" onChange={event => onChangeNum(event, index)} style={{ width: "2rem", textAlign: 'right', backgroundColor: '#FFF' }} value={value} key={index} />
            })}
        </div>
    );
};

export default ArrayInput;