export default function Footer(){
    return(
            <footer className="footer">
                <div className="footer-content">
                    {/* Lado Esquerdo */}
                    <div className="footer-brand">
                        <h2 className="brand-logo">BOOK PLUS</h2>
                        <p className="brand-text">
                            Sua livraria digital de confiança. Uma curadoria minimalista das obras mais impactantes para o seu crescimento.
                        </p>
                        <div className="brand-icons">
                            <button className="icon-btn">🔗</button>
                            <button className="icon-btn">♡</button>
                        </div>
                    </div>

                    {/* Lado Direito - Grupos de Links */}
                    <div className="footer-links">
                        <div className="link-group">
                            <h4>EXPLORAR</h4>
                            <p>Lançamentos</p>
                            <p>Mais Vendidos</p>
                            <p>E-books</p>
                        </div>
                        <div className="link-group">
                            <h4>SUPORTE</h4>
                            <p>Ajuda</p>
                            <p>Envios</p>
                            <p>Trocas</p>
                        </div>
                        <div className="link-group">
                            <h4>INSTITUCIONAL</h4>
                            <p>Sobre Nós</p>
                            <p>Contato</p>
                            <p>Privacidade</p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2024 BOOK PLUS. TODOS OS DIREITOS RESERVADOS.</p>
                    <p>DESENVOLVIDO COM <span className="heart">❤</span> NO SENAI</p>
                </div>
            </footer>
    )
}