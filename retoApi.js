


function getPokemon(){

  let namePokemon = document.getElementById("pokemon").value;
  console.log(namePokemon);

  fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`)

  .then(function(response){
    return response.json()

    .then(function(namePokemon){

      console.log(namePokemon);
      photo.src = namePokemon.sprites.other.home.front_default;
      document.getElementById('nombre').innerHTML = namePokemon.name
      console.log(namePokemon.name);
      document.getElementById('habilidad1').innerHTML = namePokemon.abilities[0].ability.name
      console.log(namePokemon.abilities[0].ability.name);
      document.getElementById('habilidad2').innerHTML = namePokemon.abilities[1].ability.name
      console.log(namePokemon.abilities[1].ability.name);
   

  
     })
     .catch(function(error){
      console.log(error)
     })
  })
  
}






