export default function CatalogoDeLivros() {
    return (
        <div className="catalogo-wrapper">
            {/* Cabeçalho da Seção */}
            <div className="catalogo-header">
                <div className="titulo-bloco">
                    <span className="label-novidades">NOVIDADES</span>
                    <h1>Destaques da Semana</h1>
                </div>

                <div className="filtros-bloco">
                    <button className="btn-filtro">≡</button>
                    <div className="select-custom">
                        <select>
                            <option>Ordenar por: Relevância</option>
                            <option>Menor Preço</option>
                            <option>Mais Populares</option>
                        </select>
                    </div>
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

                {/* Card 4 */}
                <div className="book-card">
                    <div className="capa-container" style={{ backgroundColor: '#FDE49E' }}>
                        <img src="" alt="Livro" className="livro-img" />
                    </div>
                    <div className="book-info">
                        <span className="categoria">MISTÉRIO</span>
                        <h3>O Último Inverno</h3>
                        <p>Ricardo Almeida</p>
                    </div>
                </div>
            </div>

            {/* Botão de Carga */}
            <div className="catalogo-footer">
                <button className="btn-carregar">VER CATÁLOGO COMPLETO</button>
            </div>
        </div>
    )
}