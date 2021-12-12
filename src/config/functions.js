export const renderTechIcons = (iconsArray) => {
	return iconsArray.map((icon) => {
		const { Icon, tech_name } = icon;
		return (
			<div key={tech_name}>
				{Icon}
				<span>{tech_name}</span>
			</div>
		);
	});
};

export const getProjectCoord = (currentIndex, clientHeight, projectsHeight) => {
	let amount = 0;
	if (currentIndex === 0) return clientHeight;
	for (let i = 0; i < currentIndex; i++) {
		amount += projectsHeight[i];
	}
	return clientHeight + amount;
};

export const buildProjectCoordinatesArray = (
	arr,
	scrollTop,
	clientHeight,
	projectsHeight
) => {
	let scrollBottom = scrollTop + clientHeight;
	let coordArr = [];
	let index = 0;
	for (let p of arr) {
		coordArr.push({
			top:
				scrollTop > getProjectCoord(index, clientHeight, projectsHeight)
					? scrollTop
					: getProjectCoord(index, clientHeight, projectsHeight),
			bottom:
				scrollBottom < getProjectCoord(index + 1, clientHeight, projectsHeight)
					? scrollBottom
					: getProjectCoord(index + 1, clientHeight, projectsHeight),
		});
		index++;
	}
	return coordArr;
};
