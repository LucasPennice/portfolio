import React, { useState, useEffect } from 'react';
import Project from './Project';
import WineStoreTech from './WineStoreTech';
import SearchShowTech from './SearchShowTech';
import WeatherAppTech from './WeatherAppTech';

export default ({
	position,
	setFirstHeight,
	setSecondHeight,
	setThirdHeight,
}) => {
	const winestoreProject = {
		title: 'winestore',
		paragraphArray: [
			'a landing page for a subscription based wine business',
			'Used JavaScript to create a custom menu, image slider and mocked customers reviews that change on every refresh using RandomUser’s API',
		],
		d1: 'https://imgur.com/TtD25Kc',
		d2: 'https://imgur.com/TtD25Kc',
		m1: 'https://imgur.com/cJccoDA',
		m2: 'https://imgur.com/FwG7XDJ',
		github: 'https://github.com/LucasPennice/OnlineWinestoreLanding',
		live: 'https://online-winestore-landing.vercel.app/',
	};
	const showSearchProject = {
		title: 'showsearch',
		paragraphArray: [
			'a React web app that allows the user to search for any tv show and get detailed information on each one when clicked. It also allows the user to go watch the show by clicking the show’s title. To access the data I worked with TvMaze’s API.',
			'Used Redux (& Thunk) to manage state and React-Router to control what component to render depending on the url.',
		],
		d1: 'https://imgur.com/s9MHA1s',
		d2: 'https://imgur.com/NNNtbL7',
		m1: 'https://imgur.com/H0Dlx7H',
		m2: 'https://imgur.com/0HYfYSR',
		github: 'https://github.com/LucasPennice/React-Redux-ShowSearch',
		live: 'https://react-redux-show-search.vercel.app/',
	};
	const weatherAppProject = {
		title: 'weatherapp',
		paragraphArray: [
			'a React web app that allows the user to check the current weather, and forecast of any city. It also allows the user to toggle between fahrenheit and celsius by clicking on the current temperature and to check the temperature hour by hour hovering on the graph.',
			'To access the weather data I worked with WeatherAPI’s API',
			'Continued development by refactoring the code and implemented Redux for better state management.',
		],
		d1: 'https://imgur.com/UOG6PwH',
		d2: 'https://imgur.com/7Pwkgjt',
		m1: 'https://imgur.com/SST0Gcy',
		m2: 'https://imgur.com/eimJwJC',
		github: 'https://github.com/LucasPennice/React-ReduxWeatherApp',
		live: 'https://react-redux-weather-app-iota.vercel.app/',
	};

	return (
		<>
			<Project
				project={showSearchProject}
				prevProject=""
				nextProject="weatherapp"
				position={position}
				projPosition={1}
				setHeight={setFirstHeight}
			>
				<SearchShowTech />
			</Project>
			<Project
				project={weatherAppProject}
				prevProject="showsearch"
				position={position}
				nextProject="winestore"
				projPosition={2}
				setHeight={setSecondHeight}
			>
				<WeatherAppTech />
			</Project>
			<Project
				project={winestoreProject}
				prevProject="weatherapp"
				position={position}
				nextProject=""
				projPosition={3}
				setHeight={setThirdHeight}
			>
				<WineStoreTech />
			</Project>
		</>
	);
};
