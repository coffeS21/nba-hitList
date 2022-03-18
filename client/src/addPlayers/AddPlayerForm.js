import React, {useState} from "react"

function AddPlayerForm(props){

    const playerData = {
        firstName: "",
        lastName: "",
        confrence: ""
    }
    const [newPlayerData, setNewPlayerData] = useState(playerData)

    function handleChange(e){
        const {name, value} = e.target
        setNewPlayerData(prevData => ({...prevData, [name]: value}))
    } 

    function handleSubmit(e){
        e.preventDefault()
        props.addPlayer(newPlayerData)
        setNewPlayerData(playerData)
    }



    return(
        <>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="enter first name"
                name="firstName"
                value={newPlayerData.firstName}
                onChange={handleChange}
                />
                <input
                type="text"
                placeholder="enter last name"
                name="lastName"
                value={newPlayerData.lastName}
                onChange={handleChange}
                />
                <input
                type="text"
                placeholder="enter confrence"
                name="confrence"
                value={newPlayerData.confrence}
                onChange={handleChange}
                />
                <button>add player to hit list</button>
            </form>
        </>
    )
}
export default AddPlayerForm