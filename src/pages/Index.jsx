import Iconos from 'components/Iconos'
import munequita from 'media/ToyFaces_Tansparent_BG_47.png'
import mujer from 'media/ToyFaces_Tansparent_BG_32.png'
import hombre from 'media/ToyFaces_Tansparent_BG_37.png'

function Index(){
    return(
        <div>
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
        </div>
    )
}

export default Index;