import React, {useEffect} from "react"
import axios from "axios"
import AddPlayerForm from "./AddPlayerForm"
function AddNewPlayer(props){
    
    function addToListOfPlayers(newPlayer){
        axios.get("nbaPlayers", newPlayers)
        .then(res => console.log(res))
        .catch(err => console.log("fuck"))
    }
    return(
        <div>
            <AddPlayerForm/>
        </div>
    )
}
export default AddNewPlayer