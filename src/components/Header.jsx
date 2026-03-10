import {Link} from "react-router-dom";

export default function Header() {
    return (
            <header className="header">
                <div className="header-container">
                    {/* Logo */}
                    <div className="logo-section">
                        <span className="logo-icon"></span>
                        <h1 className="logo-text">BOOK PLUS</h1>
                    </div>

                    {/* Barra de Busca */}
                    <div className="search-container">
                        <span className="search-icon"></span>
                        <input
                            type="text"
                            placeholder="Encontre sua próxima leitura..."
                            className="search-input"
                        />
                    </div>

                    {/* Navegação */}
                    <nav className="nav-menu">
                        <Link to="/">CATÁLOGO</Link>
                        <Link to="/">LANÇAMENTOS</Link>
                        <a href="#mais-vendidos">MAIS VENDIDOS</a>
                    </nav>

                    {/* Botão Admin */}
                    <button className="admin-btn"><Link to="/login">LOGIN ADMIN</Link></button>
                </div>
            </header>
    )
}