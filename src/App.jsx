import './App.css';
import munequita from './media/ToyFaces_Tansparent_BG_47.png'
import asana from './media/asana.png'
import chase from './media/chase.png'
import buzzfeed from './media/google.png'
import walmart from './media/walmart.png'

function App() {
  return (
    <div className="App">
      <body>
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
        <section>
            <h1>protecting the beauty</h1>
            <article>
                <div className="descripcion">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cum ipsam, cumque suscipit non saepe dolores perferendis fugit mollitia. </p>
                    <p>eveniet nam quasi saepe praesentium magnam illo sequi facilis incidunt culpa recusandae cupiditate provident beatae non. Neque ea illo libero quo  </p>
                    <div className="busqueda">
                        <input type="text" name="busqueda" placeholder="Looking for..."/>
                        <div className="lupa">
                            <i className="fas fa-search"></i>
                        </div>
                    </div>
                    <button>view detail</button>
                </div>
                <div className="imagen">
                    <img src={munequita} alt="imagen de encabezado"/>
                </div>
                <div className="detalles">
                    <Iconos className="fab fa-facebook-f"/>
                    <Iconos className="fab fa-twitter"/>
                    <Iconos className="fab fa-instagram"/>
                </div>
            </article>
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
      </body>  
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
