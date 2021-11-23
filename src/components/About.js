import { BiCog } from 'react-icons/bi';
import { AiOutlineBulb, AiOutlineCode, AiFillHtml5 } from 'react-icons/ai';
import {
	SiVisualstudiocode,
	SiJavascript,
	SiSass,
	SiReact,
	SiReactrouter,
	SiRedux,
	SiPostman,
	SiTailwindcss,
	SiAdobexd,
} from 'react-icons/si';
import { BsFillBootstrapFill } from 'react-icons/bs';
import { BiGitBranch } from 'react-icons/bi';

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
			<div className="aboutTech">
				<div>
					<SiReact id="reactLogo" />
					<span>React</span>
				</div>
				<div>
					<SiRedux id="reduxLogo" />
					<span>Redux</span>
				</div>
				<div>
					<SiReactrouter id="routerLogo" />
					<span>React-Router</span>
				</div>
				<div>
					<SiJavascript id="jsLogo" />
					<span>JavaScript</span>
				</div>
				<div>
					<AiFillHtml5 id="htmlLogo" />
					<span>HTML</span>
				</div>
				<div>
					<SiSass id="sassLogo" />
					<span>SASS</span>
				</div>
				<div>
					<BsFillBootstrapFill id="bootstrapLogo" />
					<span>Bootstrap</span>
				</div>
				<div>
					<SiTailwindcss id="tailwindLogo" />
					<span>Tailwind</span>
				</div>
				<div>
					<SiPostman id="postmanLogo" />
					<span>Postman</span>
				</div>
				<div>
					<SiAdobexd id="xdLogo" />
					<span>AdobeXD</span>
				</div>
				<div>
					<SiVisualstudiocode id="vscodeLogo" />
					<span>VS Code</span>
				</div>
				<div>
					<BiGitBranch id="gitLogo" />
					<span>Git</span>
				</div>
			</div>
		</div>
	);
};
