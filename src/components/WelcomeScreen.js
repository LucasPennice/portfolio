export default ({ setPosition, isFirstRender, setIsFirstRender }) => {
	return (
		<div className="welcomeDiv" id="home">
			<div className="welcomeScreenTextContainer">
				<div className="lucasPennice">LUCAS PENNICE</div>
				<div className="frontEndContainer">
					<div id="bar1" className="middleBar"></div>
					<div className="frontEndDeveloper">front end developer</div>
					<div id="bar2" className="middleBar"></div>
				</div>
			</div>
			<a
				className="goDownContainer"
				href="#mainPage"
				onClick={() => {
					if (isFirstRender === true) {
						setPosition(1);
						setIsFirstRender(false);
					}
				}}
			>
				<div id="sq1" className="square"></div>
				<div id="sq2" className="square"></div>
				<div className="bottomSquareRow">
					<div id="sq3" className="square"></div>
					<div id="sq4" className="square"></div>
					<div id="sq5" className="square"></div>
				</div>
			</a>
		</div>
	);
};
