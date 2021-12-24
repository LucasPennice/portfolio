import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import Portfolio from './Portfolio';
import About from './About';
import NavBar from './NavBar';
import Contact from './Contact';

export default ({
	position,
	switchTheme,
	setProjectsHeight,
	sectionsHeight,
	projectsHeight,
	setSectionsHeight,
	sectionOnScreen,
}) => {
	return (
		<div className="mainPageDiv" id="mainPage">
			<Router>
				<NavBar switchTheme={switchTheme} sectionOnScreen={sectionOnScreen} />
			</Router>
			<Portfolio
				position={position}
				projectsHeight={projectsHeight}
				setProjectsHeight={setProjectsHeight}
				sectionsHeight={sectionsHeight}
				setSectionsHeight={setSectionsHeight}
			/>
			<About
				setSectionsHeight={setSectionsHeight}
				sectionsHeight={sectionsHeight}
			/>
			<Contact
				setSectionsHeight={setSectionsHeight}
				sectionsHeight={sectionsHeight}
			/>
		</div>
	);
};
