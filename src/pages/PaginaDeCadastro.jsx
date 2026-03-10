import {Link} from "react-router-dom";

export default function PaginaDeCadastro(){
    return (
        <div className="register-page">
            {/* Lado Esquerdo - Imagem/Decorativo */}
            <div className="register-visual">
                <div className="visual-content">
                    <h1>Junte-se à nossa comunidade.</h1>
                    <p>Crie sua conta e tenha acesso a uma curadoria exclusiva de livros.</p>
                </div>
            </div>

            {/* Lado Direito - Formulário */}
            <div className="register-container">
                <div className="register-box">
                    <div className="register-header">
                        <span className="logo-small">BOOK PLUS</span>
                        <h2>Criar Conta</h2>
                        <p>Preencha os dados abaixo para começar.</p>
                    </div>

                    <form className="register-form">
                        <div className="field">
                            <label>Nome Completo</label>
                            <input type="text" placeholder="Ex: João Silva" />
                        </div>

                        <div className="field">
                            <label>E-mail</label>
                            <input type="email" placeholder="seu@email.com" />
                        </div>

                        <div className="field-group">
                            <div className="field">
                                <label>Senha</label>
                                <input type="password" placeholder="••••••••" />
                            </div>
                            <div className="field">
                                <label>Confirmar Senha</label>
                                <input type="password" placeholder="••••••••" />
                            </div>
                        </div>

                        <button type="submit" className="btn-register">CADASTRAR</button>
                    </form>

                    <p className="login-link">
                        Já tem uma conta? <Link to="/login">Faça login</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}