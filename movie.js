
const Button = document.getElementById("btn");
const container = document.getElementById("container");
let input;
Button.addEventListener("click", () => {


    input = document.getElementById("input-value").value;
    const searchTerm = input.trim()

    const apiKey = "f69a2a22";
    const apiUrl = `https://www.omdbapi.com/?t=${encodeURIComponent(searchTerm)}&apikey=${apiKey}`;



    async function init() {
        try {
            const rowData = await fetch(apiUrl);
            const dataAfterParse = await rowData.json()

            displayMovies(dataAfterParse)


        } catch (error) {
            console.log(error)
            alert('Something went wrong...')

        }

    }
    init()

    function displayMovies(data) {
        container.innerHTML = ""
        if (data.Response == false) {
            alert("Something went wrong...")


        }

        else {
            const child = document.createElement('div');

            const Title = document.createElement('h1');
            Title.textContent = ` Title : ${data.Title}`;

            const Poster = document.createElement('img');
            Poster.src = data.Poster;
            Poster.style.height = "300px"

            const Rating = document.createElement('h3');
            Rating.textContent = ` imdbRating :${data.imdbRating}`;

            child.append(Title, Poster, Rating)


            container.append(child)

        }

    }

})


// apiRequest by debouncing
function makeApiRequest() {
    input = document.getElementById("input-value").value;
    console.log(`${input} making api request...`)
}


let timerId;
function debounce(makeApiRequest, time) {
    if (timerId) {
        clearTimeout(timerId)
    }
    timerId = setTimeout(() => {
        makeApiRequest()
    }, time);
}




