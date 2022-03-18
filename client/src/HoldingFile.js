import React from "react"
import AddPlayerForm from "./addPlayers/AddPlayerForm"
import AddRemovePlayers from "./getDeletePlayers/AddRemovePlayers"
import axios from "axios"

function HoldingFile(){
    
    function addPlayer(newPlayer){
        axios.post("/nbaPlayers", newPlayer)
        .then(res => console.log(res))

    }
    return(
        <>
        <AddPlayerForm addPlayer={addPlayer}/>
        <AddRemovePlayers/>
        </>
    )
}
export default HoldingFile