const urlBase = 'https://pokeapi.co/api/v2/pokemon/';
const pokeCard = document.querySelector("#pokemon-display");

// Aqui estoy obteninedo y guardando la info que entra al search bar
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const dataf = new FormData(form);
    var pokeObj = Object.fromEntries(dataf);
        console.log(pokeObj)
    var pokeName = pokeObj.pokeName.trim();
        console.log(pokeName)
    var nameLowC = pokeName.toLowerCase();
    const urlAPI = urlBase + nameLowC
        console.log(urlAPI)

    fetch(urlAPI)
    .then(response => response.json()) // recivimos la respuesta en un formato JSON
    .then(data => {
        const pokemonData = data // almacenamos los datos obtenidos en nuestra constante
        function pokeAbility() {
            abilidadespoke = []
            for (let i = 0; i < pokemonData.abilities.length; i++) {
                abilidadespoke.push(pokemonData.abilities[i].ability.name)
            }return abilidadespoke.join(' / ')
        }
        function pokeType() {
            tipospoke = []
            for (let i = 0; i < pokemonData.types.length; i++) {
                tipospoke.push(pokemonData.types[i].type.name)
            }return tipospoke.join(' / ')
        }
        function pokeMove() {
            movespoke = []
            for (let i = 0; i < 4; i++) {
                movespoke.push(pokemonData.moves[i].move.name)
            }return movespoke.join(' / ')
        }
    
        
        pokeCard.innerHTML = "";
        pokeCard.innerHTML = `
        <div class="card" style="width: 25rem;">
                <div id="image" width="card-img-top">
                    <img src="${pokemonData.sprites.front_default}" width="card-img-top" alt="${pokemonData.name}">
                </div>
                <div class="card-body descript">
                    <h5 class="card-title">${pokemonData.name}</h5>
                    <p class="card-text">PokéDex index: ${pokemonData.id}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Abilidades: ${pokeAbility()}</li>
                    <li class="list-group-item">Tipo: ${pokeType()}</li>
                    <li class="list-group-item">Ataques: ${pokeMove()}</li>
                </ul>
                <div class="card-body linktl">
                    <a href="https://www.nintendo.es/Noticias/2016/agosto/-Que-es-Pokemon-Descubre-el-fenomeno-Pokemon-en-este-articulo-dedicado-1128960.html" target="_blank" class="card-link">Que es un Pokèmon?</a>
                </div>
            </div>
        `;
    })
    .catch(error => {
        pokeCard.innerHTML = "";
        pokeCard.innerHTML = `
        <h2>Quien es ${pokeName}?</h2>
        `
        console.log(`Quien es ${pokeName}?`, error)
    })
    
})




