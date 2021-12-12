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
	SiExpress,
	SiNodedotjs,
	SiTailwindcss,
	SiAdobexd,
} from 'react-icons/si';
import { BsFillBootstrapFill } from 'react-icons/bs';
import { BiGitBranch } from 'react-icons/bi';

export default () => {
	const logosArray = [
		{ Icon: <SiReact id="reactLogo" />, tech_name: 'React' },
		{ Icon: <SiRedux id="reduxLogo" />, tech_name: 'Redux' },
		{ Icon: <SiReactrouter id="routerLogo" />, tech_name: 'React-Router' },
		{ Icon: <SiJavascript id="jsLogo" />, tech_name: 'JavaScript' },
		{ Icon: <AiFillHtml5 id="htmlLogo" />, tech_name: 'HTML5' },
		{ Icon: <SiSass id="sassLogo" />, tech_name: 'Sass' },
		{
			Icon: <BsFillBootstrapFill id="bootstrapLogo" />,
			tech_name: 'Bootstrap',
		},
		{ Icon: <SiTailwindcss id="tailwindLogo" />, tech_name: 'TailwindCss' },
		{ Icon: <SiPostman id="postmanLogo" />, tech_name: 'Postman' },
		{ Icon: <SiAdobexd id="xdLogo" />, tech_name: 'AdobeXD' },
		{ Icon: <SiVisualstudiocode id="vscodeLogo" />, tech_name: 'VsCode' },
		{ Icon: <BiGitBranch id="gitLogo" />, tech_name: 'Git' },
		{ Icon: <SiExpress id="expressLogo" />, tech_name: 'Express.js' },
		{ Icon: <SiNodedotjs id="nodeLogo" />, tech_name: 'Node.js' },
	];

	const renderTechIcons = (iconsArray) => {
		return iconsArray.map((icon) => {
			const { Icon, id, tech_name } = icon;
			return (
				<div>
					{Icon}
					<span>{tech_name}</span>
				</div>
			);
		});
	};

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
