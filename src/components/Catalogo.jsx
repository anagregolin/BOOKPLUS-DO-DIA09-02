import {Link} from "react-router-dom";

export default function Catalogo() {
    return (
        <section className="catalog-section">
            <div className="catalog-header">
                <div className="title-area">
                    <span className="subtitle-line">NOVIDADES</span>
                    <h2 className="section-title">Destaques da Semana</h2>
                </div>
                <div className="filter-area">
                    <button className="filter-icon">≡</button>
                    <select className="sort-select">
                        <option>Ordenar por: Relevância</option>
                    </select>
                </div>
            </div>

            {/* Grid de Livros */}
            <div className="grid-livros">
                {/* Card 1 (Usando sua foto) */}
                <div className="book-card">
                    <div className="capa-container" style={{ backgroundColor: '#F5EFE6' }}>
                        <img src="URL_DA_SUA_FOTO.png" alt="Livro" className="livro-img" />
                    </div>
                    <div className="book-info">
                        <span className="categoria">POESIA</span>
                        <h3>O Silêncio do Mar</h3>
                        <p>Helena Vasconcelos</p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="book-card">
                    <div className="capa-container" style={{ backgroundColor: '#FBC28B' }}>
                        <img src="URL_DA_SUA_FOTO.png" alt="Livro" className="livro-img" />
                    </div>
                    <div className="book-info">
                        <span className="categoria">ROMANCE</span>
                        <h3>Caminhos de Areia</h3>
                        <p>Marcos Dutra</p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="book-card">
                    <div className="capa-container" style={{ backgroundColor: '#FFB88C' }}>
                        <img src="" alt="Livro" className="livro-img" />
                    </div>
                    <div className="book-info">
                        <span className="categoria">ENSAIOS</span>
                        <h3>Arquitetura da Alma</h3>
                        <p>Beatriz Muniz</p>
                    </div>
                </div>
            </div>


            <div className="catalog-footer">
                <button className="btn-load-more"><Link to="/catalogoo">VER CATÁLOGO COMPLETO</Link></button>
            </div>
        </section>
    )
}