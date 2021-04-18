// question 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=c60d3b3095a34a00b702334bfdc5eb2d";

const gameContainer = document.querySelector(".gamecontainer");

async function apiCall() {
    try {
        const response = await fetch(url);

        const results = await response.json();
        console.log(results)
        const details = results.results;

        let listOfGames = "";
        for (let i = 0; i < details.length; i++) {

            listOfGames += `<div class="games">Game: ${details[i].name}<br>Rating: ${details[i].rating}<br>Number of tags: ${details[i].tags.length}</div>`;

            if (i === 7) {
                break;
            }
            gameContainer.innerHTML = listOfGames
        }
    } catch (error) {
        console.log("Error ocurred");
        gameContainer.innerHTML = displayError("Error ocurred when calling the api")
    }
}

apiCall();
