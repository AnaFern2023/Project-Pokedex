import NavButton from "./NavButton.jsx";
import style from "./NavBar.module.scss";

const NavBar = ({setMenuState}) => {

	return (
		<nav className={style.navBar}>
			<NavButton to="/pokemon" text="Pokemon" setMenuState={setMenuState}/>
			<NavButton to="/types" text="Types" setMenuState={setMenuState}/>
			<NavButton to="/berries" text="Berries" setMenuState={setMenuState}/>
		</nav>
	);
};


export default NavBar;
