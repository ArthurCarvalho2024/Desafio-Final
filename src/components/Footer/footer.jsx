import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Início from "../../Pages/Início/inicio";
import Doados from "../../Pages/Doados/doados";
import QueroDoar from "../../Pages/QueroDoar/querodoar";
import S from "./footer.module.scss";

import facebook from "../../assets/facebook.png";
import insta from "../../assets/insta.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";
import linkedin from "../../assets/linkedin.png";

export default function footer() {
  return (
    <footer className={S.boxinitial}>
      <section className={S.boxRedes}>
        <h3>4002-8922</h3>
        <nav>
          <a href="">
            <img src={facebook} alt="Logo do Facebook" />
          </a>
          <a href="">
            <img src={twitter} alt="Logo do Twitter" />
          </a>
          <a href="">
            <img src={youtube} alt="Logo do Youtube" />
          </a>
          <a href="">
            <img src={linkedin} alt="Logo do Linkedin" />
          </a>
          <a href="">
            <img src={insta} alt="Logo do instagram" />
          </a>
        </nav>
      </section>
      <section className={S.boxEnd}>
        <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
      </section>
    </footer>
  );
}
