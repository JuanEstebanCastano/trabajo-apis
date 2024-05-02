let btnPokeapi = document.querySelector('#listapokemon')
let url ='https://pokeapi.co/api/v2/pokemon/' 
for (let i = 1; i < 151; i++) {
        fetch(url + i)
        .then(res =>res.json())
        .then(data =>lladaPokemon(data))
        .catch(err => console.log(err))
    }

    function lladaPokemon(data){
        let tipos = data.types.map((type)=>`<p class="${type.type.name} tipo">${type.type.name}</p>`)
        tipos = tipos.join("")
        const div = document.createElement('div')
        div.classList.add('pokemones')
    div.innerHTML =` <p class="pokemonIdBack">#${data.id}</p>  
                    <div class="pokemonImg">
                    <img src="${data.sprites.other["official-artwork"].front_default}" alt="dito">
                    </div>
                    <div class="pokemonInfo">
                        <div class="contenedorNombre">
                            <p class="id">#${data.id}</p>
                            <h2 class="nombre">${data.name}</h2>
                        </div>
                        <div class="contenedortipo">
                            ${tipos}
                        </div>
                        <div class="contenedorstats">
                            <p class="stat">${data.height}m</p>
                            <p class="stat">${data.weight}kg</p>
                        </div>
                    </div>
                </div>
                </div>
                </div>`;
                listapokemon.append(div);
        }
    // 
    //                 <p class="pokemonIdBack">#025</p>  
    //                 <div class="pokemonImg">
    //                 <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png" alt="dito">
    //                 </div>
    //                 <div class="pokemonInfo">
    //                     <div class="contenedorNombre">
    //                         <p class="id">#025</p>
    //                         <h2 class="nombre">dito</h2>
    //                     </div>
    //                     <div class="contenedortipo">
    //                         <p class="normal tipo">que esa monda</p>
    //                         <p class="rock tipo">que monda es</p>
    //                     </div>
    //                     <div class="contenedorstats">
    //                         <p class="stat">4m</p>
    //                         <p class="stat">45kg</p>
    //                     </div>
    //                 </div>
    //             </div>
    //             </div>
    //         </div>