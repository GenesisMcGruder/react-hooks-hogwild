import React, { useState } from "react";
 function HogTile({hog}){
    const [showDetails, setShowDetails] = useState(false)
  
    return(
        <div onClick={(e)=> setShowDetails(!showDetails)}>
            <h2>{hog.name}</h2>
            <img src={hog.image} alt={hog.name}/>
            {showDetails ? (
                <div>
                    <p>Specialty: {hog.specialty}</p>
                    <p>Weight: {hog.weight}</p>
                    <p>Greased: {hog.greased?"Yes":"No"}</p>
                    <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
                </div>
            ): null}
        </div>
    )
 }
export default HogTile;