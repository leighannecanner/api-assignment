
async function fetchJokes(){
    const url = "https://icanhazdadjoke.com/"


const res = await fetch(url, {
    
    //mode: 'cors',
    method: 'GET',
    headers: {
        //'Access-Control-Allow-Origin': null, 
        'Accept': 'application/json',
}
})
console.log(res)
const data = await res.json();

document.getElementById("joke-text").innerHTML = data.joke;

console.log(data) 
}

fetchJokes();



    // id = "affirmation-text"


