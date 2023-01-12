import React from "react";
import '../stylesheet/ClearButton.css'
const ClearButton = ( props ) => (
    <div className="cal_ClearButton"
         onClick={() => props.screen(props.children)}>

            {props.children}
            
    </div>
)
    
export default ClearButton;   
