import {Link, NavLink} from "react-router-dom"
import "../css/header.css"

const Header = (props) => (

    <div className={`header ${props.display}`}>
        <Link className="header-logo" to="/"><i className="fa fa-home"/> </Link>
        <NavLink className="header-about" to="/about" activeStyle={{
            fontWeight: "bold",
            color: "red",
        }}>About</NavLink>
    </div>



);

export default Header;