import { AiFillHtml5 } from 'react-icons/ai';
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

export const projectsArray = [
	{
		title: 'petwork',
		paragraphArray: [
			'react.js, express.js, node.js, mongodb, passport.js',
			'a full stack web app that allows the user to post, edit and delete a mock work proposal for their pets',
			'used express.js for the routing, passport.js for authentication and MongoDB Atlas as the database',
		],
		imgArray: [
			'https://i.imgur.com/IAEBksX.png',
			'https://i.imgur.com/5noHwKZ.png',
		],
		github: 'https://github.com/LucasPennice/PetLinkedIn',
		live: 'https://pet-work.herokuapp.com/',
		tech_used: [
			{ Icon: <SiReact id="reactLogo" />, tech_name: 'React.js' },
			{ Icon: <SiExpress id="expressLogo" />, tech_name: 'Express.js' },
			{ Icon: <SiNodedotjs id="nodeLogo" />, tech_name: 'Node.js' },
			{ Icon: <SiMongodb id="mongoLogo" />, tech_name: 'MongoDB' },
			{ Icon: <SiPassport id="passportLogo" />, tech_name: 'Passport.js' },
		],
	},
	{
		title: 'showsearch',
		paragraphArray: [
			'react.js, react-redux, react-router, sass',
			'a React web app that allows the user to search for any tv show and get detailed information on each one when clicked. It also allows the user to go watch the show by clicking the show’s title. To access the data I worked with TvMaze’s API.',
			'Used Redux (& Thunk) to manage state and React-Router to control what component to render depending on the url.',
		],
		imgArray: [
			'https://i.imgur.com/s9MHA1s.png',
			'https://i.imgur.com/NNNtbL7.png',
		],
		github: 'https://github.com/LucasPennice/React-Redux-ShowSearch',
		live: 'https://react-redux-show-search.vercel.app/',
		tech_used: [
			{ Icon: <SiReact id="reactLogo" />, tech_name: 'React.js' },
			{ Icon: <SiRedux id="reduxLogo" />, tech_name: 'Redux' },
			{ Icon: <SiReactrouter id="routerLogo" />, tech_name: 'React-Router' },
			{ Icon: <SiSass id="sassLogo" />, tech_name: 'Sass' },
		],
	},
	{
		title: 'weatherapp',
		paragraphArray: [
			'react.js, react-redux, sass',
			'a React web app that allows the user to check the current weather, and forecast of any city. It also allows the user to toggle between fahrenheit and celsius by clicking on the current temperature and to check the temperature hour by hour hovering on the graph.',
			'To access the weather data I worked with WeatherAPI’s API',
			'Continued development by refactoring the code and implemented Redux for better state management.',
		],
		imgArray: [
			'https://i.imgur.com/UOG6PwH.png',
			'https://i.imgur.com/7Pwkgjt.png',
		],
		github: 'https://github.com/LucasPennice/React-ReduxWeatherApp',
		live: 'https://react-redux-weather-app-iota.vercel.app/',
		tech_used: [
			{ Icon: <SiReact id="reactLogo" />, tech_name: 'React.js' },
			{ Icon: <SiRedux id="reduxLogo" />, tech_name: 'Redux' },
			{ Icon: <SiSass id="sassLogo" />, tech_name: 'Sass' },
		],
	},
	// {
	// 	title: 'winestore',
	// 	paragraphArray: [
	// 		'a landing page for a subscription based wine business',
	// 		'Used JavaScript to create a custom menu, image slider and mocked customers reviews that change on every refresh using RandomUser’s API',
	// 	],
	// 	d1: 'https://i.imgur.com/yvzVrFF.png',
	// 	d2: 'https://i.imgur.com/TtD25Kc.png',
	// 	m1: 'https://i.imgur.com/cJccoDA.png',
	// 	m2: 'https://i.imgur.com/FwG7XDJ.png',
	// 	github: 'https://github.com/LucasPennice/OnlineWinestoreLanding',
	// 	live: 'https://online-winestore-landing.vercel.app/',
	// 	tech_used: [
	// 		{ Icon: <SiJavascript id="jsLogo" />, tech_name: 'JavaScript' },
	// 		{ Icon: <SiSass id="sassLogo" />, tech_name: 'Sass' },
	// 		{ Icon: <AiFillHtml5 id="htmlLogo" />, tech_name: 'HTML5' },
	// 	],
	// },
];
