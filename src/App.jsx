import Header from "./components/Header.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import CatalogoDeLivros from "./pages/CatalogoDeLivros.jsx";
import DetalhesDoLivro from "./pages/DetalhesDoLivro.jsx";
import Login from "./pages/Login.jsx";
import PaginaDeCadastro from "./pages/PaginaDeCadastro.jsx";
import PaginaNaoEncontrada from "./pages/PaginaNaoEncontrada.jsx";
import Footer from "./components/Footer.jsx";
export default function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalogoo" element={<CatalogoDeLivros />} />
                    <Route path="/detalhes" element={<DetalhesDoLivro />}  />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cadastro" element={<PaginaDeCadastro />} />
                    <Route path="*" element={<PaginaNaoEncontrada />} />
                </Routes>
                <Footer />

            </BrowserRouter>
        </>
    )
}