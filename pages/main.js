/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay } from "swiper"

const Main = () => {
	const { payload, status } = useSelector((state) => state.init)
	const [isLoading, setIsLoading] = useState(true)
	const [bestList, setBestList] = useState([])
	const [panorama, setPanorama] = useState("")
	const [mainThumb, setMainThumb] = useState([])
	const [mainThumbUrl, setMainThumbUrl] = useState([])
	const [qna, setQna] = useState(null)
	const [sCategory, setSCategory] = useState("nursing")
	const cateList = [
		// { name: "요양병원", type: "hospital" },
		{ name: "요양원", type: "nursing" },
		{ name: "주야간보호", type: "protect" },
		{ name: "방문시설", type: "visiting" },
		{ name: "치매전담", type: "dimentia" },
	]
	const [sidoList, setSidoList] = useState([])

	useEffect(() => {
		const random = (start, end) =>
			Math.floor(Math.random() * (end - start + 1) + start)

		if (status === "success") {
			const ran = random(0, payload.main_thumbnails.length - 1)
			setIsLoading(false)
			setBestList(payload.qna_best_list)
			setPanorama(payload.sPanoramaUrl)
			setSidoList(payload.commonRegionCode)
			setQna(payload.qna_best_list[0])
			setMainThumb(payload.main_thumbnails[ran].thumbnail)
			setMainThumbUrl(payload.main_thumbnails[ran].url)
		}
	}, [status, payload])

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	const meta = {
		title: "또하나의가족을 찾는 실버케어 플랫폼 - 또하나의가족, 또가",
		description:
			"요양정보(노인장기요양보험,노인장기요양등급) 조회, 요양시설(요양원,주간보호센터,방문요양) 찾기, 요양지식 검색",
		author: "헥톤프로젝트",
	}

	return (
		<>
			{isLoading ? (
				<Loading />
			) : (
				<div className="main-section">
					<Helmet meta={meta} />
					<ScrollDiv
						animateIn="fadeIn"
						animateOnce={true}
						duration={0.5}
						className="main-wrap main">
						<div className="inner-wrap main-inner">
							<div className="black bhan">
								<div className="main-text">
									<p className="sub-text">요양병원? 요양원?</p>
									<strong>부모님</strong>께 필요한 <br />
									<strong>요양시설</strong>은?
								</div>
							</div>
						</div>
					</ScrollDiv>

					<ScrollDiv animateIn="fadeIn" animateOnce={true} duration={0.5}>
						<div className="inner-wrap mobile-wrap">
							<div className="paper-wrap">
								<p className="bubble-box header_title">
									또가에서 쉽고 간편하게 알려드려요
								</p>
								<div className="blue-box"></div>
								<div className="paper-box">
									<div className="paper_header">
										<div className="circle-logo"></div>
									</div>
									<div className="link-bubble-boxes">
										<div className="link-bubble-box-scroll">
											{mainThumb.map((list, index) => (
												<Link
													to={mainThumbUrl[index].replace(/&amp;/g, "&")}
													className="bubble-link"
													key={list.filesize}>
													<div className="thumb-wrap">
														<img src={list.file_path_cdn} alt="" />
													</div>
												</Link>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</ScrollDiv>

					<div className="main-wrap knowhow">
						<div className="inner-wrap">
							<ScrollDiv {...scrollSetting} className="wrapper-title">
								<p className="desc">
									<span className="sub with-icon chat">
										요양시설 이용에 궁금하신 것들은
									</span>
								</p>
								<span className="main bhan">무엇이든 물어보세요</span>
								<p className="f24 text light mt">
									가장 많은 분들이 질문하셨던 <strong>BEST 5</strong> 지식
								</p>
							</ScrollDiv>
						</div>

						<ScrollDiv {...scrollSetting} className="card-slide-wrap">
							<Swiper
								spaceBetween={gap}
								slidesPerView={slidePer}
								loop={true}
								// autoplay={{ delay: 9000, disableOnInteraction: false }}
								threshold={25}
								speed={1000}>
								{bestList.map((list) => (
									<SwiperSlide key={list.board_qna_id}>
										{({ isActive }) => {
											return (
												<KnowCard
													content={list}
													qna={qna}
													setQna={setQna}
													isActive={isActive}
												/>
											)
										}}
									</SwiperSlide>
								))}
							</Swiper>
						</ScrollDiv>

						<ScrollDiv {...scrollSetting} className="knowhow-wrap">
							{qna && <KnowTalk qna={qna} />}
						</ScrollDiv>
					</div>

					<div className="main-wrap virtual">
						<div className="inner-wrap">
							<ScrollDiv {...scrollSetting} className="wrapper-title">
								<p className="desc">
									<span className="sub with-icon glass">온라인 방문으로</span>
								</p>
								<span className="main bhan">요양시설을 직접 확인하세요</span>
								<p className="f24 light">
									또가는 전국의 요양기관과 제휴하여 파노라마 콘텐츠 서비스를
									제공합니다
								</p>
								<div className="info-box fac">
									<p className="label">더 넓게, 구석구석</p>
									<div className="info-icon icon-360"></div>
									<p className="f24 light text">
										또가만의 360도 파노라마로
										<br />
										실제 방문한 것처럼 시설을 둘러보세요
									</p>
								</div>
							</ScrollDiv>
						</div>
					</div>

					<ScrollDiv {...scrollSetting} className="panorama-wrap">
						<div className="panorama-wing top"></div>
						<Panorama
							img={mainPanorama}
							custom="main-panorama"
							viewport={mobile}
						/>
						<div className="panorama-wing bottom"></div>
					</ScrollDiv>

					<ScrollDiv {...scrollSetting}>
						<div className="inner-wrap fac pano-fac">
							<div className="info-box half fac">
								<p className="label">믿을 수 있는 정보</p>
								<div className="info-icon icon-info"></div>
								<p className="f24 light text">
									또가는 협력기관의 정보를 정확하고 투명하게 공개합니다
								</p>
							</div>
							<div className="info-box half fac">
								<p className="label">믿을 수 있는 이야기</p>
								<div className="info-icon icon-story"></div>
								<p className="f24 light text">
									실제 이용자 분들의 생생한 후기로 도움이 되는 정보를 나눠보세요
								</p>
							</div>
						</div>
					</ScrollDiv>

					<div className="main-wrap find">
						<div className="inner-wrap">
							<div className="wrapper-title">
								<p className="desc">
									<span className="sub with-icon map">전국 어디에서나,</span>
								</p>
								<span className="main bhan">요양시설을 찾아보세요</span>
							</div>
							<div>
								<div className="map-wrap">
									<ul className="map-tab">
										{cateList.map((list, index) => (
											<li
												key={index}
												onClick={() => setSCategory(list.type)}
												className={sCategory === list.type ? "active" : ""}>
												{list.name}
											</li>
										))}
									</ul>
									<MainMap sidoList={sidoList} sCategory={sCategory} />
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default Main
