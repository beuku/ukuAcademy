import React from "react";

function DataFrom (props){ 
    
    return<div className="md-3">
            <label htmlFor={props.datas} className="from-label">{props.datas}</label>
            <input
                className='from-control'
                type="text"
                name={props.datas}
                value={props.var}
                placeholder={props.placeholder}
                onChange={props.onChange}
                required
                />
        
        </div>
       
};
export default DataFrom;