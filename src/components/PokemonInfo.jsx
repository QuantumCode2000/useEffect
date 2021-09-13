import React, { useEffect, useState } from "react";

const PokemonInfo = ({ name }) => {
  const [pokemonInfo, setPokemonInfo] = useState(null);
  // const [imagePokemon, setImagePokemon] = useState(null);

  useEffect(() => {
    if (name !== null) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((res) => res.json())
        .then((namePokemon) => {
          setPokemonInfo(namePokemon);
        });
    }
  }, [name]);

  console.log(pokemonInfo);

  return (
    <div>
      La pokeId es ${pokemonInfo.id} y su nombre es {pokemonInfo.name}
      <figure>
        <img src={pokemonInfo.sprites.front_default} alt="" />
      </figure>
    </div>
  );
};

export default PokemonInfo;
