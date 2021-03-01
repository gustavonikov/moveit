import Link from 'next/link';
import styles from '../styles/components/Logged.module.css';

interface LoggedProps {
    name: string;
};

export default function logged({ name }: LoggedProps) {
    return (
        <div className={styles.container}>
            <img src="full-logo.svg" alt="Logo move.it"/>

            <h2>
                Bem-vindo de volta, 
                <br />{name}!
            </h2>

            <Link href="/home">
                <button type="button">
                    <span>Entrar</span>
                    <img src="icons/arrow.svg" alt=""/>
                </button>
            </Link>
        </div>
    );
}
