import { useLocation, useNavigate } from 'react-router-dom'
import style from './BerriesDetails.module.scss'
import { Link } from 'react-router-dom'

import { useContext } from "react";
import { ThemeContext } from "../../App";

import arrowBtn from '../../assets/img/icons/next.png'

const BerriesDetails = () => {

    const isDarkModeEnabled = useContext(ThemeContext);
    const classArray = [style.berriesDetails, isDarkModeEnabled ? style.dark : style.light];

    const location = useLocation()
    console.log(location.state);

    // location hat 2 json, daher abspeichern in je einer Konstante nötig!
    const json = location.state.json
    const json2 = location.state.json2

    console.log(json);

    const berryName = json.name[0].toUpperCase() + json.name.slice(1)
    const healthText = json2.effect_entries[0].short_effect.slice(5)
    // console.log(healthText);
    // console.log(json.id);

    const navigate = useNavigate()
    

    function nextBerry() {
        fetch(`https://pokeapi.co/api/v2/berry/${json.id + 1}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                fetch(json.item.url)
                    .then(response => response.json())
                    .then(json2 => {
                        navigate(`/berries/${(json.id + 1)}`, { state: { json: data, json2: json2 } })
                    })
            })
    }

    function prevBerry() {
        fetch(`https://pokeapi.co/api/v2/berry/${json.id - 1}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                fetch(json.item.url)
                    .then(response => response.json())
                    .then(json2 => {
                        navigate(`/berries/${(json.id - 1)}`, { state: { json: data, json2: json2 } })
                    })
            })
    }

    return (
        <section className={classArray.join(" ")}>
            <div className={style.arrow_left}>
                <img onClick={() => { prevBerry() }} src={arrowBtn} alt="arrowbutton left" />
            </div>

            <section>
                <h2>{berryName}</h2>
                <article>
                    <img src={json2.sprites.default} alt={berryName} />
                    <div>
                        <h4>Category: </h4>
                        <p>{json2.category.name}</p>
                    </div>
                    <hr />
                    <div>
                        <h4>Size: </h4>
                        <p>{json.size}</p>
                    </div>
                    <div>
                        <h4>Growth time: </h4>
                        <p>{json.growth_time}</p>
                    </div>
                    <div>
                        <h4>Max harvest: </h4>
                        <p>{json.max_harvest}</p>
                    </div>
                    <hr />
                    <div>
                        <h4>Firmness: </h4>
                        <p>{json.firmness.name}</p>
                    </div>
                    <div>
                        <h4>Smoothness: </h4>
                        <p>{json.smoothness}</p>
                    </div>
                    <div>
                        <h4>Soil dryness: </h4>
                        <p>{json.soil_dryness}</p>
                    </div>
                    <hr />
                    <div>
                        <h4>Natural gift power: </h4>
                        <p>{json.natural_gift_power}</p>
                    </div>
                    <div>
                        <h4>Natural gift type: </h4>
                        <p>{json.natural_gift_type.name}</p>
                    </div>
                    <hr />
                    <div>
                        <h4>Health:</h4>
                    </div>
                    <div>
                        <p>{healthText}</p>
                    </div>
                    <Link to="/berries">Back</Link>
                </article>
            </section>
            <div className={style.arrow_right}>
                <img onClick={() => { nextBerry() }} src={arrowBtn} alt="arrowbutton left" />
            </div>
        </section >
    );
}

export default BerriesDetails;
