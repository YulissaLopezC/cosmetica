import MenuItem from "./MenuItem"
import Iconos from "./Iconos"
function Cabecera(){
    return(
            <header>
            <div className="logotipo">WILDLING</div>
            <nav>
                <ul>
                    <MenuItem nombreitem="Manufacturing" ruta="/src/pages/Manufacturing.jsx"/>
                    <MenuItem nombreitem="Packaging"/>
                    <MenuItem nombreitem="Figma"/>
                    <MenuItem nombreitem="Delivery"/>
                    
                </ul>
            </nav>
            <div className="iconos">
                <Iconos className ="far fa-user"/>
                <Iconos className ="fas fa-shopping-cart"/>
                <Iconos className ="fas fa-bars"/>
            </div>
        </header> 
    )
}

export default Cabecera;