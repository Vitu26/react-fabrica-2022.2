import Monstro from "./Monstro";

const ListaMonstros = (props) => {
  const dados = props.dados;

  return (
    <>
      {dados.map((objeto) => {
        return <Monstro monstroUnico={objeto} />;
      })}
    </>
  );
};

export default ListaMonstros;
