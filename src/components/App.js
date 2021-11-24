import styles from '../style/styles.css';
import WelcomeScreen from './WelcomeScreen';
import MainPage from './MainPage';
import React, { useState, useEffect } from 'react';

export default () => {
	const [isFirstRender, setIsFirstRender] = useState(true);
	const [position, setPosition] = useState(null);
	const [firstHeight, setFirstHeight] = useState(null);
	const [secondHeight, setSecondHeight] = useState(null);
	const [thirdHeight, setThirdHeight] = useState(null);
	let prevPos = 0;

	const inWhatPosition = (scrollTop, clientHeight) => {
		if (window.location.pathname === '/') {
			let whosOnScreen = [null, null, null];
			let scrollBottom = scrollTop + clientHeight;
			let proy1 = {
				top: scrollTop > clientHeight ? scrollTop : clientHeight,
				bottom:
					scrollBottom < clientHeight + firstHeight
						? scrollBottom
						: clientHeight + firstHeight,
			};
			let proy2 = {
				top:
					scrollTop > clientHeight + firstHeight
						? scrollTop
						: clientHeight + firstHeight,
				bottom:
					scrollBottom < clientHeight + firstHeight + secondHeight
						? scrollBottom
						: clientHeight + firstHeight + secondHeight,
			};
			let proy3 = {
				top:
					scrollTop > clientHeight + firstHeight + secondHeight
						? scrollTop
						: clientHeight + firstHeight + secondHeight,
				bottom:
					scrollBottom < clientHeight + firstHeight + secondHeight + thirdHeight
						? scrollBottom
						: clientHeight + firstHeight + secondHeight + thirdHeight,
			};
			whosOnScreen[0] = (proy1.bottom - proy1.top) / clientHeight;
			whosOnScreen[1] = (proy2.bottom - proy2.top) / clientHeight;
			whosOnScreen[2] = (proy3.bottom - proy3.top) / clientHeight;

			let max = Math.max(...whosOnScreen);

			for (let i = 0; i < whosOnScreen.length; i++) {
				if (whosOnScreen[i] === max) {
					if (prevPos !== i + 1) {
						setPosition(i + 1);
					}
				}
			}
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', (e) => {
			inWhatPosition(
				e.target.scrollingElement.scrollTop,
				e.target.scrollingElement.clientHeight
			);
		});

		return () => {
			window.removeEventListener('scroll', (e) => {
				inWhatPosition(
					e.target.scrollingElement.scrollTop,
					e.target.scrollingElement.clientHeight
				);
			});
		};
	}, [firstHeight, secondHeight, thirdHeight]);

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
				setFirstHeight={setFirstHeight}
				setSecondHeight={setSecondHeight}
				setThirdHeight={setThirdHeight}
			/>
		</div>
	);
};
