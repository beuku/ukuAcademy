import React from "react";
import { TextField } from '@mui/material'

function CompEdit (props){
    
    return<div>
            <label htmlFor={props.edit} className="from-label">{props.edit}</label>
            <TextField
                type="text"
                name={props.name}
                value={props.var}
                onChange={props.onChange}
            />
        </div>
}

export default CompEdit;