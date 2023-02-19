readJson () {
    // http://localhost:8080
    fetch('/sohchengche/search_hacksussex/city_country.json')
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    })
    .then(json => {
        this.users = json;
        //console.log(this.users);
    })
    .catch(function () {
        this.dataError = true;
    })
 }


const cityList = document.getElementById('cityList');
const searchBar = document.getElementById('searchBar');
let city = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCity = city.filter((city) => {
        return (
            city.country.toLowerCase().includes(searchString) ||
            city.transport_info.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCity);
});



/* stopped here */



// const loadCharacters = async () => {
//     try {
//         const res = await fetch('https://hp-api.herokuapp.com/api/characters');
//         hpCharacters = await res.json();
//         displayCharacters(hpCharacters);
//     } catch (err) {
//         console.error(err);
//     }
// };

// const displayCharacters = (characters) => {
//     const htmlString = characters
//         .map((character) => {
//             return `
//             <li class="character">
//                 <h2>${character.name}</h2>
//                 <p>House: ${character.house}</p>
//                 <img src="${character.image}"></img>
//             </li>
//         `;
//         })
//         .join('');
//     charactersList.innerHTML = htmlString;
// };

// loadCharacters();
