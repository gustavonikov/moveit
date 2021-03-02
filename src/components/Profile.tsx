import { useContext } from 'react';
import { IoPersonCircle } from 'react-icons/io5';

import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

interface ProfileProps {
    name: string;
}

export default function Profile({ name }: ProfileProps) {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <IoPersonCircle size={100} color="#252d3d" />
            <div>
                <strong>{name}</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}
