import { BiCog } from 'react-icons/bi';
import { AiOutlineBulb, AiOutlineCode } from 'react-icons/ai';
import { logosArray } from '../config/about_tech';
import { renderTechIcons } from '../config/functions';

export default () => {
	return (
		<div className="aboutContainer">
			<h1 className="aboutTitle">about me</h1>
			<p className="aboutText">
				I’m a highly driven individual, who is deeply passionate about web
				development. I’m always learning, and looking for the next challenge.
				One of my main interests is creating beautiful and responsive websites
				and web applications, improve my team-working skills and keep learning
			</p>
			<div className="aboutIcons">
				<div>
					<BiCog id="cog" />
					<span>Problem Solver</span>
				</div>
				<div>
					<AiOutlineBulb id="lamp" />
					<span>Creative Designer</span>
				</div>
				<div>
					<AiOutlineCode id="code" />
					<span>Web Developer</span>
				</div>
			</div>
			<h1 className="aboutTitle">technical skills</h1>
			<div className="aboutTech">{renderTechIcons(logosArray)}</div>
		</div>
	);
};
