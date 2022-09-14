import { useState } from "react";
import dados from "./dados/dadosFake";

function App() {
  const [dadosFake, setDadosFake] = useState(dados);

  return (
    <main>
      <section className="container">
        <h1>monstros</h1>

        {dadosFake.map((objeto) => {
          return (
            <article key={objeto.id} className="monstros">
              <img src={objeto.image} alt={objeto.name} />
              <div>
                <h2>{objeto.name}</h2>
                <p>{objeto.email}</p>
              </div>
            </article>
          );
        })}

        <button
          className="btn-azul"
          type="button"
          onClick={() => {
            console.log("clicando aqui");
            setDadosFake([])
          }}
        >
          limpar monstros
        </button>
      </section>
    </main>
  );
}

export default App;
