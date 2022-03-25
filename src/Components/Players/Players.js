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
        let afterRemove = []
        const rest = player.filter(player => player.id !== removedPlayer.id)
        if (rest) {
            afterRemove = [...rest]
        }
        setPlayer(afterRemove)
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
                            <div>
                                <img src={singlePlayer.image} alt="" />
                                <h3 style={{ marginLeft: "15px" }}>{singlePlayer.name}</h3>
                                <span onClick={() => removePlayer(singlePlayer)} className='cross'>X</span>
                            </div>
                            <div>
                                <p>Odi Run: {singlePlayer.odiRun}</p>
                                <p>Odi Match: {singlePlayer.match}</p>
                                <p>Avarage: {(singlePlayer.odiRun / singlePlayer.match).toFixed(2)}</p>

                            </div>

                        </div>)
                }
            </div>
        </div>
    );
};

export default Players;