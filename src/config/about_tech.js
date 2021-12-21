import {
	SiVisualstudiocode,
	SiHeroku,
	SiJavascript,
	SiSass,
	SiReact,
	SiReactrouter,
	SiRedux,
	SiPostman,
	SiPassport,
	SiExpress,
	SiMongodb,
	SiVercel,
	SiNodedotjs,
	SiTailwindcss,
	SiAdobexd,
} from 'react-icons/si';
import { BsFillBootstrapFill } from 'react-icons/bs';
import { BiGitBranch } from 'react-icons/bi';
import { AiFillHtml5, AiFillApi } from 'react-icons/ai';

export const frontendLogosArray = [
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
	{ Icon: <AiFillApi id="reactLogo" />, tech_name: 'API' },
];

export const backendLogosArray = [
	{ Icon: <SiPassport id="passportLogo" />, tech_name: 'Passport.js' },
	{ Icon: <SiNodedotjs id="nodeLogo" />, tech_name: 'Node.js' },
	{ Icon: <SiMongodb id="mongoLogo" />, tech_name: 'MongoDB' },
	{ Icon: <SiExpress id="expressLogo" />, tech_name: 'Express.js' },
];

export const toolsLogosArray = [
	{ Icon: <SiPostman id="postmanLogo" />, tech_name: 'Postman' },
	{ Icon: <SiAdobexd id="xdLogo" />, tech_name: 'AdobeXD' },
	{ Icon: <SiVisualstudiocode id="vscodeLogo" />, tech_name: 'VsCode' },
	{ Icon: <BiGitBranch id="gitLogo" />, tech_name: 'Git' },
	{ Icon: <SiVercel id="vercelLogo" />, tech_name: 'Vercel' },
	{ Icon: <SiHeroku id="herokuLogo" />, tech_name: 'Heroku' },
];
