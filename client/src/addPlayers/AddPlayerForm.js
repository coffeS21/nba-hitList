import React, {useState} from "react"

function AddPlayerForm(props){

    const playerData = {
        firstName: "",
        lastName: ""
    }
    const [newPlayerData, setNewPlayerData] = useState(playerData)

    function handleChange(e){
        const {name, value} = e.target
        setNewPlayerData(prevData => ({...prevData, [name]: value}))
    } 

    // function handleSubmit(e){
    //     e.preventDefault()
    //     props.addPlayer(newPlayerData)
    //     setNewPlayerData(playerData)
    // }
    function handleSubmit(e){
        e.preventDefault()
        props.submit(newPlayerData)
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
              
                <button>{props.btnText}</button>
            </form>
        </>
    )
}
export default AddPlayerForm