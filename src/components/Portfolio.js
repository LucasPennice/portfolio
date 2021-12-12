import Project from './Project';
import { projectsArray } from '../config/projectsData';

export default ({ position, setProjectsHeight, projectsHeight }) => {
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

	return (
		<>
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
		</>
	);
};
