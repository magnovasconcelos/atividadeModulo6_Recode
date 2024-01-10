import { useEffect, useState } from "react";
import axios from "axios";
import style from '../styles/Home.module.css';
import "bootstrap/dist/css/bootstrap.css";

const Destino = () => {
  const [destinos, setDestino] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5003/api/Destinos")
      .then((response) => {
        setDestino(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de Categorias:", error);
      });
  }, []);

  return (
    <div>

      <h1 className="container">Lista de Destinos</h1>
      <table className="table container">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        {destinos.map((element) => (
          <tbody key={element.id}>
            <tr className={style.tabela}>
              <td>{element.id}</td>
              <td>{element.nome}</td>
              <td>{element.preco}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Destino;