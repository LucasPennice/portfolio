import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import About from './About';
import NavBar from './NavBar';
import Contact from './Contact';
import { useState } from 'react';

export default ({ position, setPosition, switchTheme }) => {
	const inWhatProject = (cTopPos, ProjectHeight) => {
		const cBotPos = cTopPos + ProjectHeight;
		setPosition(Math.round((cBotPos - 10) / ProjectHeight));
		// console.log(cBotPos);
	};
	return (
		<div className="mainPageDiv" id="mainPage">
			<Router>
				<NavBar switchTheme={switchTheme} />
				<div className="routeContainer">
					<div
						className="componentContainer"
						id="componentContainer"
						onScroll={(e) => {
							inWhatProject(e.target.scrollTop, e.target.offsetHeight);
						}}
					>
						<Routes>
							<Route path="/" element={<Portfolio position={position} />} />
							<Route path="/about" exact element={<About />} />
							<Route path="/contact" exact element={<Contact />} />
						</Routes>
					</div>
				</div>
			</Router>
		</div>
	);
};
