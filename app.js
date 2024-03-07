
const visorPokemonImagen = document.querySelector('#visorPokemonImagen');

console.log(nombrePokemon)
const descripcion = document.querySelector('.visorDescripcion');
const form = document.querySelector('form');
console.log(form)

// objeto pokemon vacio 
    const pokemonObj = {
        nombre: '',
        vida: 0,
        poder: 0,
        precision: 0,
            habilidades : { 
                habilidad1 : '',
                habilidad2 : ''
            }
    }
console.log(pokemonObj)



    //capturo nodos
    const habilidad1 = document.querySelector('.habilidad1');
    const habilidad2 = document.querySelector('.habilidad2');
    

    //actualizo pokemon


    form.addEventListener('change', function ()
    {
        const nombrePokemon = document.querySelector('#nombrePokemon');
                
        pokemonObj.nombre = nombrePokemon.value;

    });
    
//     const nombrePokemon1 = pokemonObj.nombrePokemon.value;


function renderizarPokemon(){
    const nombreTitulo = document.querySelector('.nombreDescripcion');


    const listaHabilidad = document.querySelector('#listaHabilidad');
   
    const pokemonBuscado = pokemonObj.nombre;
    nombreTitulo.innerHTML = pokemonBuscado

fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonBuscado}`)
.then(response => {
    console.log(response)
    return response.json()

})

.then(data =>{
    console.log(data)
    visorPokemonImagen.src = data.sprites.front_default

    //habilidades 
    for(let i = 0; i < data.abilities.length; i++){
        console.log(data.abilities[i].ability.name)
       let lista = "<p>"+data.abilities[i].ability.name+"</p>";
        listaHabilidad.innerHTML += "<li>"+ lista +"</li>" 
        console.log(listaHabilidad)
    }

    //mostrar vida
    const poder = document.querySelector('.poder p')
    const defensa = document.querySelector('.precision p');
    const vida = document.querySelector('.vida p');
    for(let i = 0; i < data.stats.length; i++){
        console.log(data.stats[0].base_stat)
        vida.innerText =": " + data.stats[0].base_stat
        poder.innerText = ": " + data.stats[1].base_stat
        defensa.innerText =": " + data.stats[2].base_stat

    }

})


    const botonDelete = document.querySelector('.btnCuadrado');
    console.log(botonDelete);

    botonDelete.addEventListener('click', ()=>{
        const vida = document.querySelector('.vida p');
        const defensa = document.querySelector('.precision p');
        const poder = document.querySelector('.poder p')
    
        vida.innerText =""
        poder.innerText = ""
        defensa.innerText =""
        listaHabilidad.innerHTML = ""
        nombreTitulo.innerHTML = ""
        visorPokemonImagen.src = ""
    })

}


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(pokemonObj.nombre);
    renderizarPokemon();

})






// function capturarDatos() {

//     const nombrePokemon1 = pokemonObj.nombrePokemon.value;

// return nombrePokemon1;
// }

// const url = `https://pokeapi.co/api/v2/pokemon/`


// form.addEventListener('submit', (e) => {

//     e.preventDefault();

//     const pokemonBuscado = capturarDatos();
//     console.log(pokemonBuscado);

// //Bucador de pokemon
//     fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonBuscado}`)
// .then(response => {
//     console.log(response)
//     return response.json()
// })

// .then(data =>{
    
//     console.log(data.forms)
//     for(let i = 0; i < data.forms.length ; i++){
//         console.log (data.forms[i].name)
//         const lista = "<h1>" + data.forms[i].name + "</h1>"
//         descripcion.innerHTML = lista
//     }
//    visorPokemonImagen.src = data.sprites.front_default
    
    
// })
// .catch()



// fetch(`https://pokeapi.co/api/v2/move/${pokemonBuscado}`)
// .then(response2 => {
//     return response2.json()
// })
// .then(data2 => {
//     console.log(data2)
// })




// });



