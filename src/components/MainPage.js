import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import About from './About';
import NavBar from './NavBar';
import Contact from './Contact';

export default ({
	position,
	switchTheme,
	setProjectsHeight,
	projectsHeight,
}) => {
	return (
		<div className="mainPageDiv" id="mainPage">
			<Router>
				<NavBar switchTheme={switchTheme} />
				{/* <div className="routeContainer">
					<div className="componentContainer" id="componentContainer">
						<Routes>
							<Route
								path="/"
								element={
									<Portfolio
										position={position}
										projectsHeight={projectsHeight}
										setProjectsHeight={setProjectsHeight}
									/>
								}
							/>
							<Route path="/about" exact element={<About />} />
							<Route path="/contact" exact element={<Contact />} />
						</Routes>
					</div>
				</div> */}
			</Router>
			<Portfolio
				position={position}
				projectsHeight={projectsHeight}
				setProjectsHeight={setProjectsHeight}
			/>
			<About />
			<Contact />
		</div>
	);
};
