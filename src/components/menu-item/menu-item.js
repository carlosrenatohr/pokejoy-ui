import { Link } from "react-router-dom";
import "./menu-item.css";

function MenuItem(props) {
    return (
        <li className="menu-item">
        {/* //     <a href={props.link}>{props.text}</a> */}
            <Link to={props.link}>
                {props.text}
            </Link>
        </li>
    );
}

export default MenuItem;
