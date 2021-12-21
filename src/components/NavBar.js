import { Link } from 'react-router-dom';
import { useState } from 'react';

export default ({ switchTheme }) => {
	const [currentPage, setCurrentPage] = useState('/');
	const onAnchorClick = (e) => {
		console.log(e);
	};
	const onWhatSection = (id) => {
		if (id !== currentPage) setCurrentPage(id);
	};

	const isCurrentPage = (id) => {
		if (currentPage === id) return 'currentClass';
		return '';
	};
	return (
		<nav className="navBar">
			<div className="selectedDiv"></div>
			<a
				href="#projects"
				onClick={(e) => {
					onAnchorClick(e);
					onWhatSection('/');
				}}
				className={isCurrentPage('/')}
			>
				projects
			</a>
			<a
				href="#about"
				id="/about"
				className={isCurrentPage('/about')}
				onClick={() => onWhatSection('/about')}
			>
				about
			</a>
			<a
				href="#contact"
				className={isCurrentPage('/contact')}
				onClick={() => onWhatSection('/contact')}
			>
				contact
			</a>
		</nav>
	);
};
