import React from 'react'
import Link from 'next/link'
import style from '../styles/Home.module.css'
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
        <Link href={'/'}> Home</Link>
        <Link href={'/clientes'}> Clientes</Link>
        <Link href={'/contatos'}> Contatos</Link>
        <Link href={'/destinos'}> Destinos</Link>
        <Link href={'/reservas'}> Reserva</Link>    

    </div>
  )
}
