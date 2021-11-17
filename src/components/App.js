import styles from '../style/styles.css';
import WelcomeScreen from './WelcomeScreen';
import MainPage from './MainPage';
import React, { useState, useEffect } from 'react';

export default () => {
	const [isFirstRender, setIsFirstRender] = useState(true);
	const [position, setPosition] = useState(null);
	return (
		<div className="appDiv">
			<WelcomeScreen
				setPosition={setPosition}
				isFirstRender={isFirstRender}
				setIsFirstRender={setIsFirstRender}
			/>
			<MainPage position={position} setPosition={setPosition} />
		</div>
	);
};
