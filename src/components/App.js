import styles from '../style/styles.css';
import WelcomeScreen from './WelcomeScreen';
import MainPage from './MainPage';
import { buildProjectCoordinatesArray } from '../config/functions';
import React, { useState, useEffect } from 'react';
import { projectsArray } from '../config/projectsData';

export default () => {
	const [isFirstRender, setIsFirstRender] = useState(true);
	const [position, setPosition] = useState(null);
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

	useEffect(() => {
		window.addEventListener('scroll', (e) => {
			currentProjectOnViewport(
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
			/>
		</div>
	);
};
