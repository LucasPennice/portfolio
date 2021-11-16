import Project from './Project';
export default () => {
	const winestoreProject = {
		title: 'winestore',
		paragraphArray: [
			'Built a landing page for a subscription based wine business',
			'Used JavaScript to create a custom menu, image slider and mocked customers reviews that change on every refresh using RandomUser’s API',
		],
		d1: 'https://github.com/LucasPennice/portfolio/blob/master/ProjectImages/WineStore_Desktop_2.png?raw=true',
		d2: 'https://github.com/LucasPennice/portfolio/blob/master/ProjectImages/WineStore%20Desktop%201.png?raw=true',
		m1: 'https://github.com/LucasPennice/portfolio/blob/master/ProjectImages/WineStore_Mobile_1.jpg?raw=true',
		m2: 'https://github.com/LucasPennice/portfolio/blob/master/ProjectImages/WineStore_Mobile_2.png?raw=true',
		github: 'https://github.com/LucasPennice/OnlineWinestoreLanding',
		live: 'https://online-winestore-landing.vercel.app/',
	};
	const showSearchProject = {
		title: 'showsearch',
		paragraphArray: [
			'Built a React web app that allows the user to search for any tv show and get detailed information on each one when clicked. It also allows the user to go watch the show by clicking the show’s title. To access the data I worked with TvMaze’s API.',
			'Used Redux (& Thunk) to manage state and React-Router to control what component to render depending on the url.',
			'Continued development by refactoring the code and implementing a function that changes the show’s score color depending on its value.',
		],
		d1: 'https://github.com/LucasPennice/portfolio/blob/master/ProjectImages/ShowSearch_Desktop.png?raw=true',
		d2: 'https://github.com/LucasPennice/portfolio/blob/master/ProjectImages/ShowSearch_Mobile.png?raw=true',
		m1: 'https://github.com/LucasPennice/portfolio/blob/master/ProjectImages/ShowSearch_Mobile1.jpg?raw=true',
		m2: 'https://github.com/LucasPennice/portfolio/blob/master/ProjectImages/WineStore_Mobile_2.png?raw=true',
		github: 'https://github.com/LucasPennice/React-Redux-ShowSearch',
		live: 'https://react-redux-show-search.vercel.app/',
	};
	const weatherAppProject = {
		title: 'weatherapp',
		paragraphArray: [
			'Built a React web app that allows the user to check the current weather, and forecast of any city. It also allows the user to toggle between fahrenheit and celsius by clicking on the current temperature and to check the temperature hour by hour hovering on the graph.',
			'To access the weather data I worked with WeatherAPI’s API',
			'Continued development by refactoring the code and implemented Redux for better state management.',
		],
		d1: 'https://github.com/LucasPennice/portfolio/blob/master/ProjectImages/WeatherApp_Desktop_2.png?raw=true',
		d2: 'https://github.com/LucasPennice/portfolio/blob/master/ProjectImages/WeatherApp_Desktop.png?raw=true',
		m1: 'https://github.com/LucasPennice/portfolio/blob/master/ProjectImages/WeatherApp_Mobile_2.png?raw=true',
		m2: 'https://github.com/LucasPennice/portfolio/blob/master/ProjectImages/WineStore_Mobile_2.png?raw=true',
		github: 'https://github.com/LucasPennice/React-ReduxWeatherApp',
		live: 'https://react-redux-weather-app-iota.vercel.app/',
	};

	return (
		<>
			<Project
				project={showSearchProject}
				prevProject=""
				nextProject="weatherapp"
			/>
			<Project
				project={weatherAppProject}
				prevProject="showsearch"
				nextProject="winestore"
			/>
			<Project
				project={winestoreProject}
				prevProject="weatherapp"
				nextProject=""
			/>
		</>
	);
};
