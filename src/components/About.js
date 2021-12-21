import { BiCog } from 'react-icons/bi';
import { AiOutlineBulb, AiOutlineCode } from 'react-icons/ai';
import {
	frontendLogosArray,
	backendLogosArray,
	toolsLogosArray,
} from '../config/about_tech';
import { renderTechIcons } from '../config/functions';

export default () => {
	return (
		<div className="aboutContainer">
			<h1 className="aboutTitle">about me</h1>
			<p className="aboutText">
				My name is Lucas Pennice and I’m a MERN stack developer looking for an
				entry-level position as a front end or full stack developer. I live in
				Argentina but I’m willing to work remotely
			</p>
			<p className="aboutText">
				I’m always learning, and looking for the next challenge. Some of my main
				interests are creating useful, responsive websites and web applications,
				improve my team-working skills, learn to write better code and keep
				discovering new technologies to work with
			</p>
			<p className="aboutText">
				I began my coding journey in highschool when I took three years of C, it
				was mostly based on solvin algorithmic problems. After finishing
				highschool I started studying civil engineer, but it didn't feel like a
				good fit for me. I wanted to be able to build projects and see them
				grow, after a couple of weeks I enrolled in another college to study
				system engineering
			</p>
			<p className="aboutText">
				Meanwhile I began to teach myself coding using freeCodeCamp, Udemy
				courses and Youtube videos. Later on I started reading books (such as
				Eloquent JavaScript by Marijn Haverbeke) and watching talks about how to
				write better code (such as Clean Code by Robert C. Martin)
			</p>
			<div className="aboutIcons">
				<div>
					<BiCog id="cog" />
					<span>Problem Solver</span>
				</div>
				<div>
					<AiOutlineBulb id="lamp" />
					<span>Creative Designer</span>
				</div>
				<div>
					<AiOutlineCode id="code" />
					<span>Web Developer</span>
				</div>
			</div>
			<h1 className="aboutTitle">frontend technical skills</h1>
			<div className="aboutTech">{renderTechIcons(frontendLogosArray)}</div>
			<h1 className="aboutTitle">backend technical skills</h1>
			<div className="aboutTech">{renderTechIcons(backendLogosArray)}</div>{' '}
			<h1 className="aboutTitle">tools</h1>
			<div className="aboutTech">{renderTechIcons(toolsLogosArray)}</div>
		</div>
	);
};
