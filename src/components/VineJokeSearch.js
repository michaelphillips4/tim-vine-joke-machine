import React, {useState} from 'react';
import { getFilteredJokes } from '../VineMachine';

function VineJokeSearch() {
    const [filteredJokes, setFilteredJokes] = useState([]);
    const [filter, setFilter] = useState("");
    
   
    const hightLightMatchedValue = (joke) => {
        let foundIndex = joke.search(new RegExp("\\b" + filter + "\\b", "i"));
        let value = joke.slice(foundIndex, foundIndex + filter.length);
        return <>{joke.substr(0, foundIndex)}<b>{value}</b>{joke.substr(foundIndex + filter.length)}</>;
    }

    return <>
        <input type="text"
            onInput={(e) => 
            {setFilter(e.target.value.trim());
             setFilteredJokes(getFilteredJokes(e.target.value.trim()));}}
            placeholder='Search jokes for value'></input>
       

        <h3>
           {filter.length !== 0  && 
           <>{filteredJokes.length} jokes found containing <i>{filter}</i></>
           }
         </h3>

        <ol>
            {filteredJokes.map((j, index) => <li key={index}>{hightLightMatchedValue(j)}</li>)}
        </ol>
    </>;
}

export default VineJokeSearch;