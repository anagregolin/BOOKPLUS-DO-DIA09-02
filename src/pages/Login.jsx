import {Link} from "react-router-dom";

export default function Login(){
    return(
        <div className="login-page">
            <div className="login-card">
                <div className="login-header">
                    <span className="login-logo-icon"></span>
                    <h2 className="login-logo-text">BOOK PLUS</h2>
                    <p className="login-subtitle">Bem-vindo de volta! Entre na sua conta.</p>
                </div>

                <form className="login-form">
                    <div className="input-group">
                        <label>E-mail</label>
                        <input type="email" placeholder="seu@email.com" required />
                    </div>

                    <div className="input-group">
                        <label>Senha</label>
                        <input type="password" placeholder="••••••••" required />
                    </div>

                    <div className="login-options">
                        <label className="remember-me">
                            <input type="checkbox" /> Lembrar de mim
                        </label>
                        <a href="#forgot" className="forgot-password">Esqueceu a senha?</a>
                    </div>

                    <button type="submit" className="btn-login">ENTRAR</button>
                </form>

                <div className="login-footer">
                    <p>Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link></p>
                </div>
            </div>

            <div className="login-illustration">
                {/* Espaço para uma imagem decorativa opcional */}
                <div className="illustration-text">
                    <h3>Sua próxima grande história começa aqui.</h3>
                </div>
            </div>
        </div>
    )
}