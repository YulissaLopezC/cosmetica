import './App.css';
import munequita from './media/ToyFaces_Tansparent_BG_47.png'
import asana from './media/asana.png'
import chase from './media/chase.png'
import buzzfeed from './media/google.png'
import walmart from './media/walmart.png'
import mujer from './media/ToyFaces_Tansparent_BG_32.png'
import hombre from './media/ToyFaces_Tansparent_BG_37.png'

function App() {
  return (
    <div className="App">
          <header>
            <div className="logotipo">WILDLING</div>
            <nav>
                <ul>
                    <MenuItem nombreitem="Manufacturing"/>
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
        <section className="sectionPrincipal">
            <article>
                <div className="contprincipal">   
                    <div className="descripcion">
                    <h3>Protecting the beauty</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cum ipsam, cumque suscipit non saepe dolores perferendis fugit mollitia. </p>
                        <p>eveniet nam quasi saepe praesentium magnam illo sequi facilis incidunt culpa recusandae cupiditate provident beatae non. Neque ea illo libero quo  </p>
                        <div className="busqueda">
                            <input type="text" name="busqueda" placeholder="Looking for..."/>
                            <div className="lupa">
                                <i className="fas fa-search"></i>
                            </div>
                        </div>
                        <div className ="botones">
                            <button className="stybutton white">view detail</button>
                            <button className="stybutton brown">view detail</button>
                        </div>
                    </div>
                    <div className="imagen">
                        <img src={munequita} alt="imagen de encabezado"/>
                    </div>
                </div>
                <div className="detalles">
                    <Iconos className="fab fa-facebook-f"/>
                    <Iconos className="fab fa-twitter"/>
                    <Iconos className="fab fa-instagram"/>
                </div>
            </article>
        </section>
        <section className="subsection">
            <div className="gene">
                <div className="titulo-subsection">
                    <h2>about us</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <button className="stybutton brown">More</button>
                </div>
                <div className="imagen-subsection">
                    <img src={mujer} alt="imagen"/>
                </div>
            </div>
            <div className="gene box">
                <div className="imagen-subsection">
                    <img src={hombre} alt="imagen"/>
                </div>
                <div className="texto-subsection">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                    <button className="stybutton brown">Shop</button>
                </div>
            </div>
        </section>
        <footer>
            <h3>some of our lenders</h3>
            <div className="marcas">
                <Marcas imagen = {asana} nombre="asana"/>
                <Marcas imagen = {chase} nombre="chase"/>
                <Marcas imagen = {buzzfeed} nombre="buzzfeed"/>
                <Marcas imagen = {walmart} nombre="walmart"/>
            </div>
        </footer> 
    </div>
  );
}

function MenuItem(props){
    return (<li>{props.nombreitem}</li>);
}

function Iconos(props){
    return(<i className={props.className}></i>);
}

function Marcas(props){
    return(<img src={props.imagen} alt={props.nombre}/>);
}


export default App;
