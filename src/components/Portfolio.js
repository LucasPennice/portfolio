import { CgSwap } from 'react-icons/cg';
import { AiFillGithub, AiOutlineDeploymentUnit } from 'react-icons/ai';

export default ({ projects }) => {
	const printArrays = (array) => {
		return array.map((text) => {
			return <p key={text} className="projectParagraph">{`< ${text} />`}</p>;
		});
	};

	return (
		<>
			{projects.map(({ title, paragraphArray }) => {
				return (
					<div className="projectContainer" key={title}>
						<div className="projectText">
							<h1 className="projectTitle">{title}</h1>
							<div className="projectArrayContainer">
								{printArrays(paragraphArray)}
							</div>
							<div className="linksContainer">
								<a>
									<AiFillGithub />
								</a>
								<a>
									<AiOutlineDeploymentUnit />
								</a>
							</div>
						</div>
						<div className="projectImages">
							<button className="swapButton">
								<CgSwap />
							</button>
							<div className="desktopImages">DESKTOP</div>
							<div className="mobileImages">MOBILE</div>
						</div>
					</div>
				);
			})}
		</>
	);
};
