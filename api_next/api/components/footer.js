import React from 'react'
import Link from 'next/link'
import style from '../styles/Home.module.css'
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
    return (
        <div>
            <>
                <footer className="container-fluid mt-3 bg-white">
                    <div className="footer">
                        <section className="row">
                            <section className="col copyright text-center">
                                <p className="">
                                    <small className="text-dark-50">
                                        A maior empresa de turismo do Brasil - Viagem com a M-TUR | 2023.
                                        Todos os Direitos Reservados
                                    </small>
                                </p>
                            </section>
                        </section>
                    </div>
                </footer>
            </>


        </div>
    )
}