import { AiFillHtml5 } from 'react-icons/ai';
import { SiJavascript, SiSass } from 'react-icons/si';

export default () => {
	return (
		<div className="techUsed">
			<div>
				<SiJavascript id="jsLogo" />
				<span>JavaScript</span>
			</div>
			<div>
				<SiSass id="sassLogo" />
				<span>Sass</span>
			</div>
			<div>
				<AiFillHtml5 id="htmlLogo" />
				<span>HTML</span>
			</div>
		</div>
	);
};
