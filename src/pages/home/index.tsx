import Head from 'next/head';
import { GetServerSideProps } from 'next'

import ExperienceBar from "../../components/ExperienceBar";
import Profile from "../../components/Profile";
import CompletedChallenges from "../../components/CompletedChallenges";
import Countdown from "../../components/Countdown";
import ChallengeBox from '../../components/ChallengeBox';

import styles from '../../styles/pages/Home.module.css';
import CountdownProvider from '../../contexts/CountdownContext';
import { ChallengesProvider } from '../../contexts/ChallengesContext';

interface HomeProps {
	level: number;
	currentExperience: number;
	challengesCompleted: number;
	name: string;
};

export default function Home({ level, currentExperience, challengesCompleted, name }: HomeProps) {
	return (
		<ChallengesProvider 
			level={level}
			currentExperience={currentExperience}
			challengesCompleted={challengesCompleted}		
		>
			<div className={styles.container}>
				<Head>
					<title>Início - move.it</title>
				</Head>

				<ExperienceBar />

				<CountdownProvider>
					<section>
						<div>
							<Profile name={name} />
							<CompletedChallenges />
							<Countdown />
						</div>
						<div>
							<ChallengeBox />
						</div>
					</section>
				</CountdownProvider>
			</div>
		</ChallengesProvider>
	)
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { level, currentExperience, challengesCompleted, name } = ctx.req.cookies;

	return {
		props: {
			level: Number(level),
			currentExperience: Number(currentExperience),
			challengesCompleted: Number(challengesCompleted),
			name,
		}
	}
}
