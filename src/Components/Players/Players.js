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
        /* const exsist = players.find(player => player.id === selectedPlayer.id) */

        setPlayer(newPlayers)
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
                <h1>Your Selected Player</h1>
                {
                    player.map(singlePlayer => <h1>{singlePlayer.name}</h1>)
                }
            </div>
        </div>
    );
};

export default Players;