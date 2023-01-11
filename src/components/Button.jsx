import React from 'react';
import '../stylesheet/Button.css'
function Button(props){
    const isOperator = val =>{
        return isNaN(val) && (val !== '.') && (val !== '=');
    }
    return(
        <div
        className={`cal_button ${isOperator(props.children)  ? '-operador' : '-null'}`.trimEnd()}>
            {props.children}
        </div>
    );
}
export default Button