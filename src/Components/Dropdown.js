import React from 'react';

function Dropdown({dataArr, stateVar, stateVarFunction, displayVarFunction }) {
     // handle onChange function
     function handleSelect(e) {
        const value = e.target.value
        stateVarFunction(value)
        if(value === ""){
            displayVarFunction({
                title: "",
                releaseDate: "",
                description: "",
            })
        }
        else {
            const movie = dataArr.find(({id}) => id === value)
            displayVarFunction({
                title: movie.title,
                releaseDate: movie.release_date,
                description: movie.description
            })
        }     
    }
  
    return (
        <select
        value = {stateVar}
        onChange = {(event) => handleSelect(event)}>
            <option 
            value = "">
            </option>
            { dataArr.length &&
                dataArr.map(({title,id}) => 
                <option 
                value = {id}
                key = {id}>
                    {title}
                </option>
                )
            }
        </select>
    );
}

export default Dropdown;