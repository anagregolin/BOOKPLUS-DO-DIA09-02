import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <h2 className="logo" >BOOK PLUS </h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <form className="pesquisa" role="search">
                        <input className="form-control me-2" type="search" placeholder="Encontre sua nova leitura..."
                               aria-label="Search"/>
                    </form>
                    <div className="menu" id="navbarSupportedContent">
                        <ul className="menu">
                            <li className="menu">
                                <Link to="/catalogo">Catálogo</Link>
                            </li>
                            <li className="menu">
                                <a className="nav-link active" aria-current="page" href="#">LANÇAMENTOS</a>
                            </li>
                            <li className="menu">
                                <a className="nav-link active" aria-current="page" href="#">MAIS VENDIDOS</a>
                            </li>

                            <button className="login" type="submit"> <Link to="/login">Login</Link> </button>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}