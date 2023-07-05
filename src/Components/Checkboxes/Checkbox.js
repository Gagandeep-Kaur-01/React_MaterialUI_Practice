import React, {useState} from 'react';
// import Checkbox from '@material-ui/core/Checkbox';
import { Checkbox } from '@material-ui/core';
import { getValue } from '@testing-library/user-event/dist/utils';

function CheckBox () {

    const [name, setName] =useState([])

    function getValue(e) {
        let data = name;
        data.push(e.target.value);
        console.log("values:---", data);
        // alert(e.target.value)
    }

    return (
        <div>
            <Checkbox 
                color= 'default'
                value= 'one'
                onChange = {(e) => {getValue(e)}}
            />
            <Checkbox 
                color= 'default'
                value= 'two'
                onChange = {(e) => {getValue(e)}}
            />
            <Checkbox 
                color= 'default'
                value= 'three'
                onChange = {(e) => {getValue(e)}}
            />
            <Checkbox 
                color= 'default'
                value= 'four'
                indeterminate
                onChange = {(e) => {getValue(e)}}
            />
        </div>
    )
}

export default CheckBox;