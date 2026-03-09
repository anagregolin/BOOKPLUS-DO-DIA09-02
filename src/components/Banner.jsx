export default function Banner() {
    return (
        <section className="banner">
            <div className="overlay"></div>
            <div className="textoBanner">
                <p className="lead">CURADORIA EXCLUSIVA</p>
                <h2>
                    Descubra seu <br/>
                    próximo capítulo.
                </h2>
                <p className= "descricao">
                    Mergulhe em histórias que transformam. Explore <br/>
                    nossa seleção premium de obras clássicas e <br/>
                    contemporâneas.
                </p>
                <div className="buttons">
                    <button className="btn-primary">EXPLORAR CATÁLOGO</button>
                    <button className="btn-secondary">VER PROMOÇÕES</button>
                </div>
            </div>

        </section>
    )
}