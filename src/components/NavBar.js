export default ({ sectionOnScreen }) => {
	const isCurrentPage = (id) => {
		if (sectionOnScreen === id) return 'currentClass';
		return '';
	};
	return (
		<nav className="navBar">
			<div className="selectedDiv"></div>
			<a href="#projects" className={isCurrentPage(0)}>
				projects
			</a>
			<a href="#about" id="/about" className={isCurrentPage(1)}>
				about
			</a>
			<a href="#contact" className={isCurrentPage(2)}>
				contact
			</a>
		</nav>
	);
};
