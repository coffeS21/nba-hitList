import React from "react"

function PlayerListDisplay(props){
    const {firstName, lastName, confrence, isActive, retireAmount, _id} = props
    return(
        <div>
            <header>
                <h1>{firstName} {lastName}</h1>
            </header>
            <section>
                <h4>confrence:{confrence}</h4>
            </section>
            <section>
                <h4>bounty amount: {retireAmount}</h4>
            </section>
            <section>
                <h4>player id: {_id}</h4>
                <button onClick={() => props.delete(_id)}>delete player</button>
            </section>
        </div>
    )
}
export default PlayerListDisplay