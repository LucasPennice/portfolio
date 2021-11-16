import { CgSwap } from 'react-icons/cg';
import { useState, useEffect } from 'react';
import { AiFillGithub, AiOutlineDeploymentUnit } from 'react-icons/ai';
import { CgArrowUpR, CgArrowDownR } from 'react-icons/cg';

export default ({ project, prevProject, nextProject }) => {
	const { title, paragraphArray, github, live, d1, d2, m1, m2 } = project;
	const [mobileImg, setMobileImg] = useState(m1);
	const [mobileClass, setMobileClass] = useState('mobileImages behind');
	const [mobileOpacity, setMobileOpacity] = useState(1);
	const [desktopImg, setDesktopImg] = useState(d1);
	const [desktopClass, setDesktopClass] = useState('desktopImages inFront');
	const [desktopOpacity, setDesktopOpacity] = useState(1);

	useEffect(() => {
		const ImgArray = [d1, d2, m1, m2];
		ImgArray.forEach((image) => {
			const img = new Image();
			img.src = image;
		});
	}, []);

	const printArrays = () => {
		return paragraphArray.map((text) => {
			return <p key={text} className="projectParagraph">{`< ${text} />`}</p>;
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

	const changeIndex = () => {
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
	};

	return (
		<>
			{
				<div className="projectContainer" key={title} id={title}>
					<div className="projectText">
						<h1 className="projectTitle">{title}</h1>
						<div className="projectArrayContainer">{printArrays()}</div>
						<div className="linksContainer">
							<a href={github} target="_blank">
								<AiFillGithub />
							</a>
							<a href={live} target="_blank">
								<AiOutlineDeploymentUnit />
							</a>
							<button className="swapButton" onClick={() => changeIndex()}>
								<CgSwap />
							</button>
							{prevProject === '' ? (
								<></>
							) : (
								<a href={`#${prevProject}`}>
									<CgArrowUpR />
								</a>
							)}
							{nextProject === '' ? (
								<div></div>
							) : (
								<a href={`#${nextProject}`}>
									<CgArrowDownR />
								</a>
							)}
						</div>
					</div>
					<div className="projectImages">
						<img
							onClick={() => changeImage(desktopImg, setDesktopImg, 'desktop')}
							className={desktopClass}
							src={desktopImg}
							style={{ opacity: desktopOpacity }}
						/>
						<img
							onClick={() => changeImage(mobileImg, setMobileImg, 'mobile')}
							className={mobileClass}
							src={mobileImg}
							style={{ opacity: mobileOpacity }}
						/>
					</div>
				</div>
			}
		</>
	);
};
