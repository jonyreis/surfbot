import React from 'react'

import TopHeader from './TopHeader/index'
import logo from '../../assets/logo-surfbot.svg'

import './styles.css'

function Header() {
    return (
        <header>
            <TopHeader />
            <nav>
                <div className="container navbar">
                    <img src={logo} alt="Logo Surfbot" />
                    <ul>
                        <li><a href="##" alt="Link Praia">Praia</a></li>
                        <li><a href="##" alt="Link Aulas">Aulas</a></li>
                        <li><a href="###" alt="Link Contato">Contato</a></li>
                        <li><a href="####" alt="Link Matricula" id="matricule-se" >Matricule-se</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header