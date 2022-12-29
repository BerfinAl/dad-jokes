const getDadJoke = async () => {
    const config = {headers : {Accept : "application/json"} }
    const joke =  await axios.get("https://icanhazdadjoke.com/" , config) 
    console.log(joke.data.joke)
    return joke.data.joke;
}

const dadJokeBtn = document.querySelector('button')
dadJokeBtn.addEventListener("click" , async () => {
    const joke = await getDadJoke();
    dadJokeBtn.innerText = joke;
})


