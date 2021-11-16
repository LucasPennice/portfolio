import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import About from './About';
import NavBar from './NavBar';
import Contact from './Contact';

export default () => {
	const projects = [
		{
			title: 'winestore',
			paragraphArray: [
				'Built a landing page for a subscription based wine business',
				'Used JavaScript to create a custom menu, image slider and mocked customers reviews that change on every refresh using RandomUser’s API',
			],
			d1: 'https://github.com/LucasPennice/portfolio/blob/master/ProjectImages/WineStore%20Desktop%201.png?raw=true',
			d2: 'url2',
			m1: 'ururu',
			m2: 'jajaj',
			github: 'githublink',
			live: 'livelink',
		},
		{
			title: 'showsearch',
			paragraphArray: ['jaja', 'noooo'],
			d1: 'url1',
			d2: 'url2',
			m1: 'ururu',
			m2: 'jajaj',
			github: 'githublink',
			live: 'livelink',
		},
	];
	return (
		<div className="mainPageDiv" id="mainPage">
			<Router>
				<NavBar />
				<div className="routeContainer">
					<div className="componentContainer">
						<Routes>
							<Route path="/" element={<Portfolio projects={projects} />} />
							<Route path="/about" exact element={<About />} />
							<Route path="/contact" exact element={<Contact />} />
						</Routes>
					</div>
				</div>
			</Router>
		</div>
	);
};
