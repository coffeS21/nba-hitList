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

    function addPlayer(newPlayer){
        axios.post("/nbaPlayers", newPlayer)
        .then(res => console.log(res))
    }

    function deletePlayer(id){
        axios.delete(`/nbaPlayers/${id}`)
        .then(res => {
            setHooperList(prevList=> prevList.filter(player => player._id !== id))
        })
        .catch(err => console.log("error"))
    }


  

     const mappedHoopers = hooperList.map(looper => <PlayerListDisplay {...looper} key={looper._id} delete={deletePlayer}/>)
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