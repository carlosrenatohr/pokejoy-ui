import MenuItem from "../menu-item/menu-item";
import './menu.css'

function Menu(props) {
    return (<header className="menu-wrapper">
        <nav >
          <ul className="menu">
            <MenuItem text="Home" link="/"></MenuItem>
            <MenuItem text="Pokemon" link="pokemon"></MenuItem>
          </ul>
        </nav>
      </header>
      );
}

export default Menu;
