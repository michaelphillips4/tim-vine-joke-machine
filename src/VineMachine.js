import data from "./data.json"

const getRandomJoke = () => data.timVine[Math.floor((Math.random() * data.timVine.length - 1) + 1)];

const getFilteredJokes =  (filter) => {
    if (!filter || filter.length === 0) 
    { return [] }
    else {
        return data.timVine.filter((value) => {
           return new RegExp("\\b" + filter + "\\b","i").test(value)
        } ) || [];
    }
}


export { getRandomJoke, getFilteredJokes};