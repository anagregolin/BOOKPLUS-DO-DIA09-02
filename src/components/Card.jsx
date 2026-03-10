export default function Card(){
    return (
        <div className="grid-livros">

            {/* Card 1 */}
            <div className="card">
                <div className="card-capa" style={{ backgroundColor: '#F5EFE0' }}>
                    <div className="livro-verde"></div>
                </div>
                <div className="card-txt">
                    <span>POESIA</span>
                    <h3>O Silêncio do Mar</h3>
                    <p>Helena Vasconcelos</p>
                </div>
            </div>

            {/* Card 2 */}
            <div className="card">
                <div className="card-capa" style={{ backgroundColor: '#FBC28B' }}>
                    <div className="livro-verde-claro"></div>
                </div>
                <div className="card-txt">
                    <span>ROMANCE</span>
                    <h3>Caminhos de Areia</h3>
                    <p>Marcos Dutra</p>
                </div>
            </div>

            {/* Card 3 */}
            <div className="card">
                <div className="card-capa" style={{ backgroundColor: '#FFB88C' }}>
                    <div className="livro-branco"></div>
                </div>
                <div className="card-txt">
                    <span>ENSAIOS</span>
                    <h3>Arquitetura da Alma</h3>
                    <p>Beatriz Muniz</p>
                </div>
            </div>

            {/* Card 4 */}
            <div className="card">
                <div className="card-capa" style={{ backgroundColor: '#FDE49E' }}>
                    <div className="livro-marrom"></div>
                </div>
                <div className="card-txt">
                    <span>MISTÉRIO</span>
                    <h3>O Último Inverno</h3>
                    <p>Ricardo Almeida</p>
                </div>
            </div>

            {/* Card 5 */}
            <div className="card">
                <div className="card-capa" style={{ backgroundColor: '#F3F0E7' }}>
                    <div className="livro-azul"></div>
                </div>
                <div className="card-txt">
                    <span>CRÔNICAS</span>
                    <h3>Crônicas da Capital</h3>
                    <p>Fernanda Costa</p>
                </div>
            </div>

        </div>
    )
}