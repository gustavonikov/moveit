import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

import styles from '../styles/pages/Login.module.css';
import Logged from '../components/Logged';

export default function Login() {
    const [name, setName] = useState('');
    const [savedName, setSavedName] = useState('');
    const [logged, setLogged] = useState(false);

    function saveNameInCookies() {
        Cookies.set('name', name)
    }

    useEffect(() => {
        const moveitName = Cookies.get('name');
        setLogged(true);

        if (moveitName.length > 2) {
            setSavedName(moveitName);
        }
    })

    return (
        <div className={styles.container}>
            <Head>
                <title>Login - move.it</title>
            </Head>
            
            <img src="symbol.svg" alt="Símbolo moveit"/>

            {
                logged ? 
                    <Logged name={savedName} />
                :
                (
                    <div className={styles.section}>
                        <img src="full-logo.svg" alt="Logo moveit"/>

                        <strong>Bem-vindo</strong>

                        <p>
                            Cuide da saúde do seu corpo com
                            <br />
                            move.it
                        </p>

                        <div className={styles.inputBox}>
                            <input 
                                type="text"  
                                placeholder="Digite seu nome"
                                value={name}
                                onChange={(ev) => setName(ev.target.value)} 
                            />
                            <Link href="/home">
                                <button type="button" onClick={saveNameInCookies}>
                                    <img src="icons/arrow.svg" alt="Seta para direita"/>
                                </button>
                            </Link>
                        </div>
                    </div>
                )
            }
        </div>
    );
}
