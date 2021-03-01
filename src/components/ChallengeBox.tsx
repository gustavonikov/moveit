import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export default function ChallengeBox() {
    const { currentChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);

    function handleChallengeCompleted() {
        completeChallenge()
        resetCountdown()
    }

    function handleChallengeNotCompleted() {
        resetChallenge()
        resetCountdown()
    }

    return (
        <div className={styles.challengeBoxContainer}>
            {
                currentChallenge ?
                (
                    <div className={styles.challengeActive}>
                        <header>Ganhe {currentChallenge.amount} xp</header>

                        <main>
                            <img src={`icons/${currentChallenge.type}.svg`} alt="body"/>
                            <strong>Novo desafio</strong>
                            <p>
                                {currentChallenge.description}
                            </p>
                        </main>

                        <footer>
                            <button type="button" onClick={handleChallengeNotCompleted} className={styles.challengeNotCompletedButton}>
                                Falhei
                            </button>
                            <button type="button" onClick={handleChallengeCompleted} className={styles.challengeCompletedButton}>
                                Completei
                            </button>
                        </footer>
                    </div>
                )
                :
                (
                    <div className={styles.challengeNotActive}>
                        <strong>Complete um ciclo para receber um desafio</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="level up"/>
                            Avance de level completando desafios.
                        </p>
                    </div>
                )
            }
        </div>
    );
}
