import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

import styles from '../styles/pages/Login.module.css';
import Logged from '../components/Logged';
import { GetServerSideProps } from 'next';

interface LoginProps {
    username: string;
};

export default function Login({ username }: LoginProps) {
    const [name, setName] = useState('');
    const [savedName, setSavedName] = useState('');
    const [logged, setLogged] = useState(false);

    function saveNameInCookies() {
        Cookies.set('name', name);
    }

    useEffect(() => {
        if (username) {
            /* setLogged(true); */
            setSavedName(username);
        }
    }, [])

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
                            Cuide da sua saúde e melhore seu foco 
                            com move.it
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { name } = ctx.req.cookies;

	return {
		props: {
			username: name,
		}
	}
}
