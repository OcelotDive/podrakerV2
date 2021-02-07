import React from 'react';




const SoundBars = () => {

const soundBars = [...Array(36)];
    return (
    
    <div id="bars">
        {soundBars.map( (soundBar, index) => 
        <div className="bar" key={`soundbar${index}`}></div>
    )
        }
    
    
</div>
    )
}

export default SoundBars;