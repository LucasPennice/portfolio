import styles from '../dist/styles.css';
import WelcomeScreen from './WelcomeScreen';
import MainPage from './MainPage';
import { buildProjectCoordinatesArray } from '../config/functions';
import React, { useState, useEffect } from 'react';
import { projectsArray } from '../config/projectsData';

export default () => {
	const [isFirstRender, setIsFirstRender] = useState(true);
	const [position, setPosition] = useState(null);
	const [sectionsHeight, setSectionsHeight] = useState([]);
	const [sectionOnScreen, setSectionOnScreen] = useState(null);
	const [projectsHeight, setProjectsHeight] = useState([]);

	const currentProjectOnViewport = (scrollTop, clientHeight) => {
		let whosOnScreen = [];

		let projCoord = buildProjectCoordinatesArray(
			projectsArray,
			scrollTop,
			clientHeight,
			projectsHeight
		);
		for (let p of projCoord) {
			const { top, bottom } = p;
			whosOnScreen.push((bottom - top) / clientHeight);
		}

		let max = Math.max(...whosOnScreen);

		for (let i = 0; i < whosOnScreen.length; i++) {
			if (whosOnScreen[i] === max) {
				setPosition(i);
			}
		}
	};

	const currentSectionOnViewport = (scrollTop) => {
		const h1 = sectionsHeight[0];
		const h2 = h1 + sectionsHeight[1];
		const h3 = h2 + sectionsHeight[2];
		if (scrollTop <= h1) setSectionOnScreen(0);
		if (scrollTop > h1 && scrollTop < h3) setSectionOnScreen(1);
		if (scrollTop >= h3) setSectionOnScreen(2);
	};

	useEffect(() => {
		window.addEventListener('scroll', (e) => {
			currentProjectOnViewport(
				e.target.scrollingElement.scrollTop,
				e.target.scrollingElement.clientHeight
			);
			currentSectionOnViewport(
				e.target.scrollingElement.scrollTop,
				e.target.scrollingElement.clientHeight
			);
		});

		return () => {
			window.removeEventListener('scroll', (e) => {
				currentProjectOnViewport(
					e.target.scrollingElement.scrollTop,
					e.target.scrollingElement.clientHeight
				);
				currentSectionOnViewport(
					e.target.scrollingElement.scrollTop,
					e.target.scrollingElement.clientHeight
				);
			});
		};
	}, []);

	return (
		<div className="appDiv">
			<WelcomeScreen
				setPosition={setPosition}
				isFirstRender={isFirstRender}
				setIsFirstRender={setIsFirstRender}
			/>
			<MainPage
				position={position}
				setPosition={setPosition}
				projectsHeight={projectsHeight}
				setProjectsHeight={setProjectsHeight}
				sectionOnScreen={sectionOnScreen}
				sectionsHeight={sectionsHeight}
				setSectionsHeight={setSectionsHeight}
			/>
		</div>
	);
};
