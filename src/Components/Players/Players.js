import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import './Players.css'

const Players = () => {
    const [players, setPlayers] = useState([])
    const [player, setPlayer] = useState([])
    useEffect(() => {
        fetch("fakedata.json")
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])

    const clickForDetails = (selectedPlayer) => {
        let newPlayers = [...player, selectedPlayer]
        const exist = player.find(player => player.id === selectedPlayer.id)
        if (!exist) {
            setPlayer(newPlayers)
        }
    }

    const removePlayer = (removedPlayer) => {
        console.log(removedPlayer)
    }

    return (
        <div className='parent'>
            <div className='players'>
                {
                    players.map(player =>
                        <Player
                            key={player.id}
                            player={player}
                            clickForDetails={clickForDetails}
                        ></Player>
                    )
                }
            </div>
            <div className='selected-player'>
                <h2>Your Selected Player</h2>
                {
                    player.map(singlePlayer =>

                        <div className='singlePlayer' >
                            <img src={singlePlayer.image} alt="" />
                            <h3>{singlePlayer.name}</h3><span onClick={() => removePlayer(singlePlayer)} className='cross'>X</span>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Players;