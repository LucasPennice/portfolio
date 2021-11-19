import { SiSass, SiReact, SiRedux } from 'react-icons/si';

export default () => {
	return (
		<div className="techUsed">
			<div>
				<SiReact id="reactLogo" />
				<span>React</span>
			</div>
			<div>
				<SiRedux id="reduxLogo" />
				<span>Redux</span>
			</div>
			<div>
				<SiSass id="sassLogo" />
				<span>Sass</span>
			</div>
		</div>
	);
};
