import { useEffect, useState } from "react";
import dados from "./dados/dadosFake";

function App() {
  const [dadosFake, setDadosFake] = useState(dados);

  const apagarDados = () => {
    setDadosFake([]);
  };

  

  return (
    <main>
      <section className="container">
        <h1>{dadosFake.length} monstros</h1>

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

        <button className="btn-azul" type="button" onClick={apagarDados}>
          limpar monstros
        </button>
      </section>
    </main>
  );
}

export default App;
