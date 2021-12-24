import Project from './Project';
import { projectsArray } from '../config/projectsData';
import { useEffect, useRef } from 'react';

export default ({
	position,
	setProjectsHeight,
	projectsHeight,
	setSectionsHeight,
	sectionsHeight,
}) => {
	const ref = useRef(null);
	const getObjectPosition = (title, operation = 0) => {
		let positionInArray = 0;

		for (let obj of projectsArray) {
			if (obj.title === title) {
				if (operation === 0) return positionInArray;
				positionInArray += operation;
				if (positionInArray > projectsArray.length - 1) return '';
				if (positionInArray < 0) return '';
				return projectsArray[positionInArray].title;
			}
			positionInArray++;
		}
	};

	useEffect(() => {
		let heightArr = sectionsHeight;
		heightArr[0] = ref.current.clientHeight;
		setSectionsHeight(heightArr);
		console.log(sectionsHeight);
	}, []);

	return (
		<div id="projects" ref={ref}>
			{projectsArray.map((project) => {
				const { title } = project;
				return (
					<Project
						key={title}
						project={project}
						prevProject={getObjectPosition(title, -1)}
						position={position}
						nextProject={getObjectPosition(title, +1)}
						projPosition={getObjectPosition(title)}
						setHeight={setProjectsHeight}
						projectsHeight={projectsHeight}
					/>
				);
			})}
		</div>
	);
};
