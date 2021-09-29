import MenuItem from "./MenuItem"
import Iconos from "./Iconos"
import { Link } from "react-router-dom";

const Cabecera = ()=>{
    return (
        <header>
            <div className="logotipo">
                <Link to="/" className="logo">WILDLING</Link>
            </div>
            <nav>
                <ul>
                    <MenuItem nombreitem="Manufacturing" router="/Manufacturing"/>
                    <MenuItem nombreitem="Packaging" router="/Packaging"/>
                    <MenuItem nombreitem="Figma" router="/Figma"/>
                    <MenuItem nombreitem="Delivery" router="/Delivery"/>
                    
                </ul>
            </nav>
            <div className="iconos">
                <Iconos className ="far fa-user"/>
                <Iconos className ="fas fa-shopping-cart"/>
                <Iconos className ="fas fa-bars"/>
            </div>
        </header> 
    );
}

export default Cabecera;