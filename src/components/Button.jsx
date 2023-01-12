import React from 'react';
import '../stylesheet/Button.css'
function Button(props){
    const isOperator = val =>{
        return isNaN(val) && (val !== '.') && (val !== '=');
    }
    const isFucntion = isOperator(props.children);    
    return(
        <div
        className={`cal_button ${isFucntion ? '-operador' : '-null'}`.trimEnd()}
        onClick={() => props.addValue(props.children)}>
            {props.children}
        </div>
    );
}
export default Button