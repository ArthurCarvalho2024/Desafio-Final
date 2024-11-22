import livroLogo from "../../assets/livroLogo.png";
import search from "../../assets/search.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Início from "../../Pages/Início/inicio";
import Doados from "../../Pages/Doados/doados";
import QueroDoar from "../../Pages/QueroDoar/querodoar";
import S from "./header.module.scss";

export default function header() {
  return (
    <BrowserRouter>
      <header>
        <section className={S.boxLogo}>
          <img src={livroLogo} alt="Logo de um livro aberto" />
          <h1>Livros Vai na Web</h1>
        </section>
        <nav className={S.boxMenu}>
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/doados">Livros Doados</Link>
            </li>
            <li>
              <Link to="/querodoar">Quero Doar</Link>
            </li>
          </ul>
        </nav>
        <div className={S.boxInput}>
          <input type="text" placeholder="O que você procura?" />
          <img src={search} alt="" />
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Início />} />
        <Route path="/doados" element={<Doados />} />
        <Route path="/querodoar" element={<QueroDoar />} />
      </Routes>
    </BrowserRouter>
  );
}
