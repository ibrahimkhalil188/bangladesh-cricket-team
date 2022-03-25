import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import './Players.css'

const Players = () => {
    const [players, setPlayers] = useState([])
    useEffect(() => {
        fetch("fakedata.json")
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])
    return (
        <div className='parent'>
            <div className='players'>
                {
                    players.map(player =>
                        <Player
                            key={player.id}
                            player={player}

                        ></Player>
                    )
                }
            </div>
            <div className='selected-player'>
                <h1>Your Selected Player</h1>

            </div>
        </div>
    );
};

export default Players;