import styles from './TypeDetailPage.module.scss';
import { useParams, Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from '../../App';
import TypesList from '../../components/PokemonTypes/TypesList/TypesList';

const TypeDetailPage = () => {

    const typeName = useParams();
    // console.log(typeName);
    const [typeDetails, setTypeDetails] = useState([])

    const location = useLocation()

    useEffect(() => {
        console.log(typeName);
        fetch(`https://pokeapi.co/api/v2/type/${typeName.id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTypeDetails([data])
            })
    }, [location.pathname])
    // console.log(typeDetails);


    //DarkMode:
    const isDarkModeEnabled = useContext(ThemeContext)
    // console.log(isDarkModeEnabled);
    const classArray = [styles.typeDetail, isDarkModeEnabled ? styles.dark : styles.light];



    // Zuweisung der Farbe zu jedem Type in der Überschrift
    let typeClass = '';
    switch (typeName.id) {
        case "normal":
            typeClass = styles.normal;
            break;
        case "fighting":
            typeClass = styles.fighting;
            break;
        case "flying":
            typeClass = styles.flying;
            break;
        case "poison":
            typeClass = styles.poison;
            break;
        case "ground":
            typeClass = styles.ground;
            break;
        case "rock":
            typeClass = styles.rock;
            break;
        case "bug":
            typeClass = styles.bug;
            break;
        case "ghost":
            typeClass = styles.ghost;
            break;
        case "steel":
            typeClass = styles.steel;
            break;
        case "fire":
            typeClass = styles.fire;
            break;
        case "water":
            typeClass = styles.water;
            break;
        case "grass":
            typeClass = styles.grass;
            break;
        case "electric":
            typeClass = styles.electric;
            break;
        case "psychic":
            typeClass = styles.psychic;
            break;
        case "ice":
            typeClass = styles.ice;
            break;
        case "dragon":
            typeClass = styles.dragon;
            break;
        case "dark":
            typeClass = styles.dark;
            break;
        case "fairy":
            typeClass = styles.fairy;
            break;
    }

    // console.log(typeDetails);

    return (
        <div className={classArray.join(" ")} >

            <h2 className={typeClass}>{`${typeName.id.toUpperCase()}`}</h2>
            {typeDetails.map((elt) => {


                return (
                    <div key={elt.name}>

                        <section className={styles.damage_flex} >
                            <article>
                                <div className={styles.container_hl_card}>
                                    <h3 className={styles.hl_damage_to}> Gives Damage to</h3>
                                </div>
                                <article>

                                    <h5>Double Damage:</h5>
                                    {elt.damage_relations.double_damage_to.map((elt) => {
                                        let eltTypeClass = "";
                                        switch (elt.name) {
                                            case "normal":
                                                eltTypeClass = styles.normal;
                                                break;
                                            case "fighting":
                                                eltTypeClass = styles.fighting;
                                                break;
                                            case "flying":
                                                eltTypeClass = styles.flying;
                                                break;
                                            case "poison":
                                                eltTypeClass = styles.poison;
                                                break;
                                            case "ground":
                                                eltTypeClass = styles.ground;
                                                break;
                                            case "rock":
                                                eltTypeClass = styles.rock;
                                                break;
                                            case "bug":
                                                eltTypeClass = styles.bug;
                                                break;
                                            case "ghost":
                                                eltTypeClass = styles.ghost;
                                                break;
                                            case "steel":
                                                eltTypeClass = styles.steel;
                                                break;
                                            case "fire":
                                                eltTypeClass = styles.fire;
                                                break;
                                            case "water":
                                                eltTypeClass = styles.water;
                                                break;
                                            case "grass":
                                                eltTypeClass = styles.grass;
                                                break;
                                            case "electric":
                                                eltTypeClass = styles.electric;
                                                break;
                                            case "psychic":
                                                eltTypeClass = styles.psychic;
                                                break;
                                            case "ice":
                                                eltTypeClass = styles.ice;
                                                break;
                                            case "dragon":
                                                eltTypeClass = styles.dragon;
                                                break;
                                            case "dark":
                                                eltTypeClass = styles.dark;
                                                break;
                                            case "fairy":
                                                eltTypeClass = styles.fairy;
                                                break;
                                            default:
                                                eltTypeClass = styles.normal;
                                                break;
                                        }
                                        return (
                                            <Link className={[eltTypeClass, styles.linksType].join(" ")} to={`/types/${elt.name}`} key={elt.name}>{elt.name}</Link>
                                        )
                                    }
                                    )}

                                    <hr />
                                    <h5>Half Damage:</h5>
                                    {elt.damage_relations.half_damage_to.map((elt) => {
                                        let eltTypeClass = "";
                                        switch (elt.name) {
                                            case "normal":
                                                eltTypeClass = styles.normal;
                                                break;
                                            case "fighting":
                                                eltTypeClass = styles.fighting;
                                                break;
                                            case "flying":
                                                eltTypeClass = styles.flying;
                                                break;
                                            case "poison":
                                                eltTypeClass = styles.poison;
                                                break;
                                            case "ground":
                                                eltTypeClass = styles.ground;
                                                break;
                                            case "rock":
                                                eltTypeClass = styles.rock;
                                                break;
                                            case "bug":
                                                eltTypeClass = styles.bug;
                                                break;
                                            case "ghost":
                                                eltTypeClass = styles.ghost;
                                                break;
                                            case "steel":
                                                eltTypeClass = styles.steel;
                                                break;
                                            case "fire":
                                                eltTypeClass = styles.fire;
                                                break;
                                            case "water":
                                                eltTypeClass = styles.water;
                                                break;
                                            case "grass":
                                                eltTypeClass = styles.grass;
                                                break;
                                            case "electric":
                                                eltTypeClass = styles.electric;
                                                break;
                                            case "psychic":
                                                eltTypeClass = styles.psychic;
                                                break;
                                            case "ice":
                                                eltTypeClass = styles.ice;
                                                break;
                                            case "dragon":
                                                eltTypeClass = styles.dragon;
                                                break;
                                            case "dark":
                                                eltTypeClass = styles.dark;
                                                break;
                                            case "fairy":
                                                eltTypeClass = styles.fairy;
                                                break;
                                            default:
                                                eltTypeClass = styles.normal;
                                                break;
                                        }
                                        return (
                                            <Link to={`/types/${elt.name}`} className={[eltTypeClass, styles.linksType].join(" ")} key={elt.name}>{elt.name}</Link>
                                        )
                                    }
                                    )}

                                </article>
                            </article>

                            <article>
                                <div>
                                    <h3>Gets Damage from</h3>
                                </div>
                                <article>

                                    <h5>Double Damage:</h5>
                                    {elt.damage_relations.double_damage_from.map((elt) => {
                                        let eltTypeClass = "";
                                        switch (elt.name) {
                                            case "normal":
                                                eltTypeClass = styles.normal;
                                                break;
                                            case "fighting":
                                                eltTypeClass = styles.fighting;
                                                break;
                                            case "flying":
                                                eltTypeClass = styles.flying;
                                                break;
                                            case "poison":
                                                eltTypeClass = styles.poison;
                                                break;
                                            case "ground":
                                                eltTypeClass = styles.ground;
                                                break;
                                            case "rock":
                                                eltTypeClass = styles.rock;
                                                break;
                                            case "bug":
                                                eltTypeClass = styles.bug;
                                                break;
                                            case "ghost":
                                                eltTypeClass = styles.ghost;
                                                break;
                                            case "steel":
                                                eltTypeClass = styles.steel;
                                                break;
                                            case "fire":
                                                eltTypeClass = styles.fire;
                                                break;
                                            case "water":
                                                eltTypeClass = styles.water;
                                                break;
                                            case "grass":
                                                eltTypeClass = styles.grass;
                                                break;
                                            case "electric":
                                                eltTypeClass = styles.electric;
                                                break;
                                            case "psychic":
                                                eltTypeClass = styles.psychic;
                                                break;
                                            case "ice":
                                                eltTypeClass = styles.ice;
                                                break;
                                            case "dragon":
                                                eltTypeClass = styles.dragon;
                                                break;
                                            case "dark":
                                                eltTypeClass = styles.dark;
                                                break;
                                            case "fairy":
                                                eltTypeClass = styles.fairy;
                                                break;
                                            default:
                                                eltTypeClass = styles.normal;
                                                break;
                                        }
                                        return (
                                            <Link to={`/types/${elt.name}`} className={[eltTypeClass, styles.linksType].join(" ")} key={elt.name}>{elt.name}</Link>
                                        )
                                    }
                                    )}


                                    <hr />
                                    <h5>Half Damage:</h5>
                                    {elt.damage_relations.half_damage_from.map((elt) => {
                                        let eltTypeClass = "";
                                        switch (elt.name) {
                                            case "normal":
                                                eltTypeClass = styles.normal;
                                                break;
                                            case "fighting":
                                                eltTypeClass = styles.fighting;
                                                break;
                                            case "flying":
                                                eltTypeClass = styles.flying;
                                                break;
                                            case "poison":
                                                eltTypeClass = styles.poison;
                                                break;
                                            case "ground":
                                                eltTypeClass = styles.ground;
                                                break;
                                            case "rock":
                                                eltTypeClass = styles.rock;
                                                break;
                                            case "bug":
                                                eltTypeClass = styles.bug;
                                                break;
                                            case "ghost":
                                                eltTypeClass = styles.ghost;
                                                break;
                                            case "steel":
                                                eltTypeClass = styles.steel;
                                                break;
                                            case "fire":
                                                eltTypeClass = styles.fire;
                                                break;
                                            case "water":
                                                eltTypeClass = styles.water;
                                                break;
                                            case "grass":
                                                eltTypeClass = styles.grass;
                                                break;
                                            case "electric":
                                                eltTypeClass = styles.electric;
                                                break;
                                            case "psychic":
                                                eltTypeClass = styles.psychic;
                                                break;
                                            case "ice":
                                                eltTypeClass = styles.ice;
                                                break;
                                            case "dragon":
                                                eltTypeClass = styles.dragon;
                                                break;
                                            case "dark":
                                                eltTypeClass = styles.dark;
                                                break;
                                            case "fairy":
                                                eltTypeClass = styles.fairy;
                                                break;
                                            default:
                                                eltTypeClass = styles.normal;
                                                break;
                                        }

                                        return (
                                            <Link to={`/types/${elt.name}`} className={[eltTypeClass, styles.linksType].join(" ")} key={elt.name}>{elt.name}</Link>
                                        )
                                    }
                                    )}

                                </article>
                            </article>
                        </section>
                        <article>
                            <h4 id={styles.hl_PokemonList}>Pokemons</h4>
                            <TypesList pokemon={elt.pokemon} />
                        </article>

                    </div>
                )
            })}
        </div >
    );
}

export default TypeDetailPage;

