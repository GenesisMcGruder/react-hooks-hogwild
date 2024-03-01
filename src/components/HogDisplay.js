import React, { useState } from "react";
import HogTile from "./HogTile";
import Filter from "./Filter";

function HogDisplay({hogs}){

    const[showGreased,setShowGreased] = useState(true)
    const [sortBy, setSortBy] = useState("name")
    const filterGreasedHogs = hogs.filter(hog => {
        if(showGreased){
            return hog.greased
        }else{
            return true
        }
    })

    const sortedHogs = filterGreasedHogs.sort((hogA,hogB) => {
        if(sortBy === "name"){
            return hogA.name.localeCompare(hogB.name)
        } else{
            return hogA.weight - hogB.weight
        }
    })

    function handleUpdateSort(newSort){
        setSortBy(newSort)
    }
    function handleGreaseFilterUpdate(){
        setShowGreased(!showGreased)
    }
    const hogTiles = sortedHogs.map((hog)=> {
        return <HogTile key={hog.name} hog={hog}/>
    })
    return(
        <div className="ui grid container">
            <Filter showGreased={showGreased}
            onHandleGreaseUpdate={handleGreaseFilterUpdate}
            sortBy={sortBy}
            onUpdateSort={handleUpdateSort}/>
            {hogTiles}
        </div>
    )
}
export default HogDisplay;