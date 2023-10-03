import React, { useState } from 'react';
import { getRandomJoke } from '../VineMachine';

function VineJoke() {
    const [joke, setJoke] = useState(getRandomJoke());
    return <> 
        <blockquote className='spacer'>
           <i>{joke}</i>
        </blockquote>
        <button className="button" onClick={() => setJoke(getRandomJoke())}>
            Next
        </button>
    </>;
}
export default VineJoke;