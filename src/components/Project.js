import { useState, useEffect, useRef } from 'react';
import { AiFillGithub, AiOutlineCloudServer } from 'react-icons/ai';
import { CgArrowUpR, CgArrowDownR } from 'react-icons/cg';
import { renderTechIcons } from '../config/functions';
import ImageSlider from './ImageSlider';
export default ({
	project,
	prevProject,
	nextProject,
	position,
	projPosition,
	setHeight,
	projectsHeight,
}) => {
	const ref = useRef(null);
	const {
		title,
		paragraphArray,
		github,
		live,
		d1,
		d2,
		m1,
		m2,
		tech_used,
		imgArray,
	} = project;
	const [mobileImg, setMobileImg] = useState(m1);
	const [mobileClass, setMobileClass] = useState('mobileImages behind');
	const [mobileOpacity, setMobileOpacity] = useState(1);
	const [desktopImg, setDesktopImg] = useState(d1);
	const [titleClass, setTitleClass] = useState('projectTitle');
	const [paragraphClass, setParagraphClass] = useState('projectParagraph');
	const [desktopClass, setDesktopClass] = useState('desktopImages inFront');
	const [desktopOpacity, setDesktopOpacity] = useState(1);
	//se borra si falla
	const getCurrentProjectHeight = () => {
		let heightArr = projectsHeight;
		heightArr[projPosition] = ref.current.clientHeight;
		return heightArr;
	};

	useEffect(() => {
		const ImgArray = [d1, d2, m1, m2];
		ImgArray.forEach((image) => {
			const img = new Image();
			img.src = image;
		});

		// setHeight(ref.current.clientHeight);
		setHeight(getCurrentProjectHeight());
	}, []);

	const printArrays = () => {
		let delay = 0;
		return paragraphArray.map((text) => {
			delay += 0.1;
			return <p key={text} className={paragraphClass}>{`< ${text} />`}</p>;
		});
	};
	const changeImage = (currentImg, ImageChanger, screen) => {
		if (screen === 'desktop') {
			if (currentImg === d1) {
				setDesktopClass(desktopClass + ' blur');
				ImageChanger(d2);
				setTimeout(() => {
					setDesktopClass(desktopClass.replace(' blur', ''));
				}, 200);
			} else {
				setDesktopClass(desktopClass + ' blur');
				ImageChanger(d1);
				setTimeout(() => {
					setDesktopClass(desktopClass.replace(' blur', ''));
				}, 200);
			}
		} else {
			if (currentImg === m1) {
				setMobileClass(mobileClass + ' blur');
				ImageChanger(m2);
				setTimeout(() => {
					setMobileClass(mobileClass.replace(' blur', ''));
				}, 200);
			} else {
				setMobileClass(mobileClass + ' blur');
				ImageChanger(m1);
				setTimeout(() => {
					setMobileClass(mobileClass.replace(' blur', ''));
				}, 200);
				currentImg === m1 ? ImageChanger(m2) : ImageChanger(m1);
			}
		}
	};

	const changeIndex = (clickedClass) => {
		if (!clickedClass.includes('inFront')) {
			if (desktopClass.includes('inFront')) {
				setDesktopOpacity(0);
				setTimeout(() => {
					setMobileClass('mobileImages inFront');
					setDesktopClass('desktopImages behind');
				}, 200);
				setTimeout(() => {
					setDesktopOpacity(1);
				}, 300);
			} else {
				setMobileOpacity(0);
				setTimeout(() => {
					setMobileClass('mobileImages behind');
					setDesktopClass('desktopImages inFront');
				}, 200);
				setTimeout(() => {
					setMobileOpacity(1);
				}, 300);
			}
		}
	};

	useEffect(() => {
		let id = null;
		let id2 = null;

		if (position === projPosition) {
			id2 = setTimeout(() => {
				setParagraphClass('projectParagraph animateProject');
				setTitleClass('projectTitle animateProject');
			}, 100);
		}
		if (position !== projPosition) {
			id = setTimeout(() => {
				setTitleClass('projectTitle goingAway');
				setParagraphClass('projectParagraph goingAway');
			}, 100);
		}
		return () => {
			clearTimeout(id);
			clearTimeout(id2);
		};
	}, [position]);

	return (
		<div className="projectContainer" ref={ref} key={title} id={title}>
			<div className="projectText">
				<h1 className={titleClass}>{title}</h1>
				<div className="techUsed">{renderTechIcons(tech_used)}</div>
				<div className="projectArrayContainer">{printArrays()}</div>
				<div className="linksContainer">
					<a href={github} target="_blank" rel="noreferrer">
						<AiFillGithub />
					</a>
					<a href={live} target="_blank" rel="noreferrer">
						<AiOutlineCloudServer />
					</a>
					{prevProject === '' ? (
						<></>
					) : (
						<a href={`#${prevProject}`}>
							<CgArrowUpR />
						</a>
					)}
					{nextProject === '' ? (
						<></>
					) : (
						<a href={`#${nextProject}`}>
							<CgArrowDownR />
						</a>
					)}
				</div>
			</div>
			{/* <div className="projectImages">
				<img
					onClick={() => {
						changeImage(desktopImg, setDesktopImg, 'desktop');
						changeIndex(desktopClass);
					}}
					className={desktopClass}
					src={desktopImg}
					style={{ opacity: desktopOpacity }}
				/>
				<img
					onClick={() => {
						changeImage(mobileImg, setMobileImg, 'mobile');
						changeIndex(mobileClass);
					}}
					className={mobileClass}
					src={mobileImg}
					style={{ opacity: mobileOpacity }}
				/>
			</div> */}
			<ImageSlider imgArray={imgArray} />
		</div>
	);
};
