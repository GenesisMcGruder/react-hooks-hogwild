import React from "react";

function Filter({showGreased, onHandleGreaseUpdate, sortBy, onUpdateSort}){
    return(
        <div>
            <label>
            Show Only Greased?
             <input type="checkbox" checked={showGreased} onChange={()=> onHandleGreaseUpdate()}/>    
            </label>
            <select value={sortBy} onChange={(e) => onUpdateSort(e.target.value)}>
                <option value="name">Sort by Name</option>
                <option value="weight">Sort by Weight</option>
            </select>
            
        </div>
    )
}
export default Filter;