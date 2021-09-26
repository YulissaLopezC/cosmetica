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
            <div class="logotipo">WILDLING</div>
            <nav>
                <ul>
                    <li>Manufacturing</li>
                    <li>Packaging</li>
                    <li>Figma</li>
                    <li>Delivery</li>
                </ul>
            </nav>
            <div class="iconos">
                <i class="far fa-user"></i>
                <i class="fas fa-shopping-cart"></i>
                <i class="fas fa-bars"></i>
            </div>
        </header>

        <section>
            <h1>protecting the beauty</h1>
            <article>
                <div class="descripcion">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cum ipsam, cumque suscipit non saepe dolores perferendis fugit mollitia. eveniet nam quasi saepe praesentium magnam illo sequi facilis incidunt culpa recusandae cupiditate provident beatae non. Neque ea illo libero quo  </p>
                    <div class="busqueda">
                        <input type="text" name="busqueda" placeholder="Looking for..."/>
                        <div class="lupa">
                            <i class="fas fa-search"></i>
                        </div>
                    </div>
                    <button>view detail</button>
                </div>
                <div class="imagen">
                    <img src={munequita} alt="imagen de encabezado"/>
                </div>
                <div class="detalles">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-instagram"></i>
                </div>
            </article>
        </section>


        <footer>
            <h3>some of our lenders</h3>
            <div class="marcas">
                <img src={asana} alt="asana"/>
                <img src={chase} alt="chase"/>
                <img src={buzzfeed} alt="buzzfeed"/>
                <img src={walmart} alt="walmart"/>
            </div>
        </footer>
      </body>  
    </div>
  );
}

export default App;
