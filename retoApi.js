class Pokemon
{
  constructor(name)
  {
    this.name  = name;
  }
}




async function getPokemon(){

  let name = document.getElementById("name").value;
  console.log(name);

  let url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  let param =
  {
    headers:{"content-type": "application/json; charset = UTF-8"},
    method:"GET"
  }

   fetch(url,param)
   .then(function(data){
     console.log(data);
     return data.json()
   })
   .then(function(result){
     if(!result.error){
       console.log()
     
     }else{
       alert("Error: " + result.mensaje)
     }

   })

  .catch(function(error){
    console.log(error)
   })
}


