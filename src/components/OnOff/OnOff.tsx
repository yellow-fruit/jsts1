import React, {useState} from "react";
import {findAllByDisplayValue} from "@testing-library/react";


type OnOffPropsType = {
  /*  on:boolean*/
}



export const OnOff =(props:OnOffPropsType)=>{
    console.log("off rendering")

    let [on, setOn] = useState(true);

    console.log('on' + on)

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "2px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "gray",
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "2px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "gray" : "red",
    };
    const indicatorStyle = {
        width: "15px",
        height: "15px",
        borderRadius: "15px",
        border: "2px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red",
    };

    return(
        <div>
            <div style={onStyle} onClick={ () => { setOn(true) }}>on</div>
            <div style={offStyle} onClick={ () => { setOn(false) }}>off</div>
            <div style={indicatorStyle}></div>
            <div>blabla</div>


        </div>
    )
}
