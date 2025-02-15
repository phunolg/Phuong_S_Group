function getListPokemon(offset, limit) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
        .then(response => response.json())
        .then(data => data);
}

function getPokemonDetail(pokemonId) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then(response => response.json())
        .then(data => data);
}

function displayPokemon(data){
    const pokemonList = data.results;
    const pokemonBox = document.querySelector('.main-content');

    pokemonList.forEach(pokemon => {
        const pokemonName = pokemon.name;
        const pokemonUrl = pokemon.url;
        const pokemonId = pokemonUrl.split('/')[pokemonUrl.split('/').length - 2];

        const pokemonDetail = getPokemonDetail(pokemonId);
        pokemonDetail.then(data => {
            const types = data.types;
            let typeString = '';
            types.forEach(type => {
                typeString += `<span class="type ${type.type.name}">${type.type.name}</span>`;
            });

            pokemonBox.innerHTML += `
            <div class = "pokemon-box">
                    <div class="id">#`+pokemonId+`</div>
                    <div class="img">
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`+pokemonId+`.png" alt="`+pokemonName+`">
                    </div>
                    <div class="name">`+pokemonName+`</div>
    
                    <div class = "features">`+typeString+`</div>
    
                </div>
            `; 
        });
    });
}

var offset = 0;
var limit = 36;

var handle_pokemon = getListPokemon(offset, limit);

handle_pokemon.then(data => {
    displayPokemon(data);
});


function loadMore() {
    offset += 36;

    handle_pokemon = getListPokemon(offset, limit);
    handle_pokemon.then(data => {
        displayPokemon(data);
    });
}

function searchPokemon() {
    const getValue = document.getElementById('search-input').value.toLowerCase();
    const pokemonBox = document.querySelectorAll('.pokemon-box');
    let found = false;

    pokemonBox.forEach(box => {
        const name = box.querySelector('.name').innerText.toLowerCase();
        if (name.includes(getValue)) {
            box.style.display = 'inline-block';
            found = true;
        } else {
            box.style.display = 'none';
        }
    });

    const result  = document.getElementById('unfind');
    if (!found && getValue !== '') {
            const btn = document.getElementById('btn');
            btn.style.display = 'none';
            const message  = document.getElementById('text');
            message.style.display = 'inline-block';
            result.innerText = `"${getValue}"`;
    }else{
        const btn = document.getElementById('btn');
        btn.style.display = 'inline-block';
        const message  = document.getElementById('text');
        message.style.display = 'none';
    }
    if (getValue === '') {
        pokemonBox.forEach(box => {
            box.style.display = 'inline-block';
        });
    }
}
document.getElementById('search-input').addEventListener('input', searchPokemon);
