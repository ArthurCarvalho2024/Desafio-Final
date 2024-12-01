import S from "./querodoar.module.scss";
import livro from "../../assets/livro.png";

export default function QueroDoar() {
  return (
    <section className={S.principal}>
      <section className={S.container}>
        <h2>
          Por favor, preencha o formulário com suas informações e as informações
          do Livro
        </h2>
        <form action="" className={S.formsBox}>
          <div className={S.titleBox}>
            <img src={livro} alt="" />
            <h3>Informações do livro</h3>
          </div>
          <div className={S.inputBox}>
            <input type="text" placeholder="Título" />

            <input type="text" placeholder="Categoria" />

            <input type="text" placeholder="Autor" />

            <input type="text" placeholder="Link da imagem" />
          </div>
          <input className={S.button} type="submit" value="Doar" />
        </form>
      </section>
    </section>
  );
}
