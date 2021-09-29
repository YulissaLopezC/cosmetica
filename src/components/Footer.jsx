import Marcas from "./Marcas";
/*IMAGENES IMPORT*/
import asana from '../media/asana.png'
import chase from '../media/chase.png'
import buzzfeed from '../media/google.png'
import walmart from '../media/walmart.png'
/*---*/ 

function Footer(){
    return(
        <footer>
            <h3>some of our lenders</h3>
            <div className="marcas">
                <Marcas imagen = {asana} nombre="asana"/>
                <Marcas imagen = {chase} nombre="chase"/>
                <Marcas imagen = {buzzfeed} nombre="buzzfeed"/>
                <Marcas imagen = {walmart} nombre="walmart"/>
            </div>
        </footer> 
    );
}

export default Footer;