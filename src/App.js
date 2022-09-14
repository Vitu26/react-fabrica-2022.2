import { useEffect, useState } from "react";

function App() {
  const [dados, setDados] = useState([]);

  const apagarDados = () => {
    setDados([]);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((dadosAPI) => setDados(dadosAPI.slice(0, 5)));
  }, []);

  return (
    <main>
      <section className="container">
        <h1>{dados.length} monstros</h1>

        {dados.map((objeto) => {
          return (
            <article key={objeto.id} className="monstros">
              <img
                src={`https://robohash.org/${objeto.id}?set=set2`}
                alt={objeto.name}
              />
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
