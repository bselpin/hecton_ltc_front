import Head from "next/head"
import Main from "./main"
import styles from "../styles/Home.module.scss"

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
			</Head>
			<p>fdasfs</p>
			<Main />
		</div>
	)
}
