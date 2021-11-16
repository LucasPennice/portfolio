import { MdDeveloperMode } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default () => {
	const onAnchorClick = (e) => {
		console.log(e);
	};
	return (
		<nav className="navBar">
			<div className="selectedDiv"></div>
			<a>home</a>
			<Link to="/" onClick={(e) => onAnchorClick(e)}>
				projects
			</Link>
			<Link to="/about">about</Link>
			<Link to="/contact">contact</Link>
			<button>
				<MdDeveloperMode />
			</button>
		</nav>
	);
};
