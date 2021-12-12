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
import { AiFillHtml5 } from 'react-icons/ai';

export const logosArray = [
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
