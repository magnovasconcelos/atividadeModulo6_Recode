import { useEffect, useState } from "react";
import axios from "axios";
import style from '../styles/Home.module.css';
import "bootstrap/dist/css/bootstrap.css";

const Cliente = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5003/api/Clientes")
      .then((response) => {
        setClients(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de Categorias:", error);
      });
  }, []);

  return (
    <div>

      <h1 className="container">Lista de Clientes</h1>
      <table className="table container">
        <thead>
          <tr>
            <th>cpf</th>
            <th>Nome</th>
            <th>Email</th>
            <th>telefone</th>
          </tr>
        </thead>
        {clients.map((element) => (
          <tbody key={element.categoriaId}>
            <tr className={style.tabela}>
              <td>{element.cpf}</td>
              <td>{element.nome}</td>
              <td>{element.email}</td>
              <td>{element.telefone}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Cliente;
