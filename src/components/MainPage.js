import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import About from './About';
import NavBar from './NavBar';
import Contact from './Contact';
import { useState } from 'react';

export default ({
	position,
	setPosition,
	switchTheme,
	setFirstHeight,
	setSecondHeight,
	setThirdHeight,
}) => {
	return (
		<div className="mainPageDiv" id="mainPage">
			<Router>
				<NavBar switchTheme={switchTheme} />
				<div className="routeContainer">
					<div className="componentContainer" id="componentContainer">
						<Routes>
							<Route
								path="/"
								element={
									<Portfolio
										setFirstHeight={setFirstHeight}
										setSecondHeight={setSecondHeight}
										setThirdHeight={setThirdHeight}
										position={position}
									/>
								}
							/>
							<Route path="/about" exact element={<About />} />
							<Route path="/contact" exact element={<Contact />} />
						</Routes>
					</div>
				</div>
			</Router>
		</div>
	);
};
