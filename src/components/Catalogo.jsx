export default function Catálogo() {
    return (
        <section>
            <div className="catalogo">

                <p className="novidades">NOVIDADES</p>


                <div className="div">
                    <h2 className="destaques">Destaques da Semana</h2>

                    <li className="relevancia">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                           aria-expanded="false">
                            Ordenar por: Relevância
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Mais recente</a></li>
                            <li><a className="dropdown-item" href="#">menor preço</a></li>
                        </ul>
                    </li>
                </div>






            </div>

        </section>
    )
}