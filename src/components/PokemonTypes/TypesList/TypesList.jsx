import { useState, useEffect, useContext } from "react";
import { ThemeContext } from '../../../App';
import styles from '../TypesList/TypesList.module.scss';
// import TypeListItem from "./TypeListItem";
import PokemonListItem from "../../PokemonList/PokemonListItem";
import { FilterContext } from "../../../pages/mainPage/MainPage";

const TypesList = ({ pokemon }) => {

    const filterObject = useContext(FilterContext)

    // DarkMode 
    const isDarkModeEnabled = useContext(ThemeContext)
    // console.log(isDarkModeEnabled);
    const classArray = [styles.typesList, isDarkModeEnabled ? styles.dark : styles.light];


    const [pokemonDetails, setPokemonDetails] = useState([]);

    useEffect(() => {
        Promise.all(
            pokemon.map(props => {
                return (
                    fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemon.name}`)
                        .then(res => res.json())
                )
            }
            )
        ).then(data => {
            // console.log(data);

            setPokemonDetails(data);
        });
    }, [pokemon]);

    return (
        <div className={classArray.join(" ")} >
            {pokemonDetails.map((elt, index) => {
                if (elt.sprites.other.dream_world.front_default === null || elt.id > 1000) {
                    return
                }
                if (elt.name.includes(filterObject.filter)) {
                    return (<PokemonListItem key={elt.id} name={pokemon[index].pokemon.name} url={pokemon[index].pokemon.url} />)
                }

            })}
        </div>
    );
};

export default TypesList;
