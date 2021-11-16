import { CgSwap } from 'react-icons/cg';
import { useState } from 'react';
import { AiFillGithub, AiOutlineDeploymentUnit } from 'react-icons/ai';
import { GrFormNext } from 'react-icons/gr';

export default ({ projects }) => {
	const printArrays = (array) => {
		return array.map((text) => {
			return <p key={text} className="projectParagraph">{`< ${text} />`}</p>;
		});
	};

	function RenderProjects() {
		return projects.map(
			({ title, paragraphArray, github, live, d1, d2, m1, m2 }) => {
				const front = 2;
				const behind = 1;
				const changeImage = () => {};

				let desktopStyle = {
					background: `url(${d1})`,
					backgroundSize: 'cover',
					zIndex: front,
				};
				let mobileStyle = {
					background: `url(${m1})`,
					backgroundSize: 'cover',
					zIndex: behind,
				};
				return (
					<div className="projectContainer" key={title}>
						<div className="projectText">
							<h1 className="projectTitle">{title}</h1>
							<div className="projectArrayContainer">
								{printArrays(paragraphArray)}
							</div>
							<div className="linksContainer">
								<a href={github}>
									<AiFillGithub />
								</a>
								<a href={live}>
									<AiOutlineDeploymentUnit />
								</a>
							</div>
						</div>
						<div className="projectImages">
							<button className="changeImgBtn" onClick={() => changeImage()}>
								<GrFormNext />
							</button>
							<button className="swapButton">
								<CgSwap />
							</button>
							<div className="desktopImages" style={desktopStyle}></div>
							<div className="mobileImages" style={mobileStyle}></div>
						</div>
					</div>
				);
			}
		);
	}

	return <>{RenderProjects()}</>;
};
