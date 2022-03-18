import React from "react"
import AddPlayerForm from "./addPlayers/AddPlayerForm"
import AddRemovePlayers from "./getDeletePlayers/AddRemovePlayers"

function HoldingFile(){
    return(
        <>    
        <AddPlayerForm/>
        <AddRemovePlayers/>
        </>
    )
}
export default HoldingFile