import React from 'react';
import './Player.css'

const Player = ({ player, clickForDetails }) => {
    const { name, image, roll, match } = player
    console.log(player.odiRun)
    return (
        <div className='player'>

            <img src={image} alt="" />
            <div className='player-info'>
                <h2>{name}</h2>
                <h4>Playing role: {roll}</h4>
                <h4>Played Match: {match}</h4>
            </div>
            <div className='btn'>
                <button onClick={() => clickForDetails(player)} className='details-btn'>Show-Details</button>
            </div>
        </div>
    );
};

export default Player;