import React from 'react'

import logo from '../../assets/logo-surfbot.svg'

import './styles.css'

function Header() {
    return (
        <header>
            <div className="top-header">
                <p className="container">Aula na Praia Mansa de Sexta à Sábado 08:00 as 14:00</p>
            </div>
            <nav>
                <div className="container navbar">
                    <img src={logo} alt="Logo Surfbot" />
                    <ul>
                        <li>Praia</li>
                        <li>Aulas</li>
                        <li>Contato</li>
                        <li>Matricule-se</li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header