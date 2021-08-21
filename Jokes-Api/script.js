


const api = "https://v2.jokeapi.dev/joke/Any?type=single";
document.querySelector(".btn").addEventListener('click',()=>getJoke());
const getJoke = async () =>{
    const request = await fetch(api);
    const response = await request.json();
    document.querySelector(".joke").textContent = response.joke;
}
getJoke();