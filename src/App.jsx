import Header from "./components/Header.jsx";
import Banner from "./components/Banner.jsx";
import Catalogo from "./components/Catalogo.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
export default function App() {
    return (
        <>
            <Header />
            <Banner />
            <Catalogo />

            <BrowserRouter>
                <Routes>
                    <Route path="/" elements={<Home />} />
                    <Route path="/catalogo" elements={<CatalogoDeLivros />} />
                    <Route path="/detalhes" elements={<DetalhesDoLivro />} />
                    <Route path="/login" elements={<Login />} />
                    <Route path="/cadastro" elements={<PaginaDeCadastro />} />
                    <Route path="*" elements={<PaginaNaoEncontrada />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}