import { useEffect, useState } from "react";
import axios from "axios";
import style from '../styles/Home.module.css';
import "bootstrap/dist/css/bootstrap.css";

const Reserva = () => {
    const [reservas, setReserva] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5003/api/Reservas")
            .then((response) => {
                setReserva(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar a lista de Categorias:", error);
            });
    }, []);

    return (
        <div>
            <h1 className="container">Lista de Reservas</h1>
            <table className="table container">
                <thead>
                    <tr>
                        <th>Numero da Reserva</th>
                        <th>Data da Reserva</th>
                        <th>Forma de Pagamento</th>
                        <th>Valor da Reserva</th>
                    </tr>
                </thead>
                <tbody>
                    {reservas.map((element) => (
                        <tr key={element.numeroReserva} className={style.tabela}>
                            <td>{element.numeroReserva}</td>
                            <td>{element.dataReserva}</td>
                            <td>{element.formaPagamento}</td>
                            <td>{element.valorReserva}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Reserva;
