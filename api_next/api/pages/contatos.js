import { useEffect, useState } from "react";
import axios from "axios";
import style from '../styles/Home.module.css';
import "bootstrap/dist/css/bootstrap.css";

const Contato = () => {
    const [contatos, setContato] = useState([]);

    useEffect(() => {
        axios
          .get("http://localhost:5003/api/Contatos")
          .then((response) => {
            setContato(response.data);
          })
          .catch((error) => {
            console.error("Erro ao buscar a lista de Categorias:", error);
          });
      }, []);

    return (
        <div>

            <h1 className="container">Lista de Contatos</h1>
            <table className="table container">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Mensagem</th>
                        <th>Assunto</th>
                    </tr>
                </thead>
                {contatos.map((element) => (
                    <tbody key={element.id}>
                        <tr className={style.tabela}>
                            <td>{element.id}</td>
                            <td>{element.mensagem}</td>
                            <td>{element.assunto}</td>
                            
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    );
};

export default Contato;
