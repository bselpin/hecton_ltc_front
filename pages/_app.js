import "core-js/stable"
import "core-js/features/promise"
import "regenerator-runtime/runtime"
import "react-app-polyfill/ie11"
import "react-app-polyfill/stable"
import "url-search-params-polyfill"
import Head from "next/head"
import "../styles/globals.scss"

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<link rel="icon" href="/favicon.ico" />
				<meta name="theme-color" content="#ffffff" />
				<meta
					name="keywords"
					content="요양병원, 요양원, 주야간보호, 방문시설, 치매전담, 요양시설, 노인요양, 장기요양보험, 또하나의가족, 또가"
				/>
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta
					name="apple-mobile-web-app-status-bar-style-capable"
					content="#ffffff"
				/>
				<meta
					name="apple-mobile-app-status-bar-style-capable"
					content="#ffffff"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://ddoga.co.kr" />
				<meta
					property="og:site_name"
					content="또하나의가족을 찾는 실버케어 플랫폼 - 또하나의가족, 또가"
				/>
				<meta property="al:web:url" content="https://ddoga.co.kr" />
				<link rel="apple-touch-icon" href="/logo192.png" />
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
				<link
					href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
					rel="preload"
					as="style"
				/>
				<link
					href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
					rel="stylesheet"
				/>
				<link
					rel="preload"
					as="style"
					href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&amp;display=swap"
				/>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&amp;display=swap"
				/>
				<script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
				<meta
					name="google-site-verification"
					content="M5dYedIwOSUbZ7yGBAp5nsfZgNboFiJJjX_fxu2VaN0"
				/>
				<meta
					name="naver-site-verification"
					content="edef9311d871335c53eb3a3087e75bb01ba972ab"
				/>
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
