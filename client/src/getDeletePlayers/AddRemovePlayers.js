import React, {useState, useEffect} from "react"
import PlayerListDisplay from "./PlayerListDisplay"
import axios from "axios"

function AddRemovePlayers(props){
    const [hooperList, setHooperList] = useState([])

    function listOfPlayers(){
          axios.get("/nbaPlayers")
          .then(res =>{
              const data = res.data
              console.log(data)
              setHooperList(data)
          })
          .catch(err =>{
            console.log("opps you got an error")
            alert("opps you got an error")
          })
    }


    const cookedPlayer = playerId=>{
        axios.delete(`/nbaPlayers/${playerId}`)
        .then(res => {
            setHooperList(prevList => prevList.filter(player=> playerId !== player._id))
            alert("the player has been remove from the list")
        })
        .catch(err => console.log("the player has not been remove from the list"))
        alert("the player has not been remove from the list")
    }

     const mappedHoopers = hooperList.map(looper => <PlayerListDisplay {...looper} key={looper._id} delete={cookedPlayer}/>)
    useEffect(()=>{
        listOfPlayers()
    },[])

    return(
        <div>
           
            {mappedHoopers}
        </div>
    )
}
export default AddRemovePlayers