const urlBase = 'https://pokeapi.co/api/v2/pokemon/'

// Aqui estoy obteninedo y guardando la info que entra al search bar
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const dataf = new FormData(form);
    var pokeObj = Object.fromEntries(dataf);
    var pokeName = pokeObj.pokeName;
    console.log(pokeName)
    var nameLowC = pokeName.toLowerCase();
    const urlAPI = urlBase + nameLowC
    console.log(urlAPI)

    fetch(urlAPI)
    .then(response => response.json()) // recivimos la respuesta en un formato JSON
    .then(data => {
        const pokemonData = data // almacenamos los datos obtenidos en nuestra constante
        console.log(pokemonData.height)
    })
    .catch(error => console.log(`Quien es ${pokeName}?`, error))
    
})




