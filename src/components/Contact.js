import {
	AiFillLinkedin,
	AiFillGithub,
	AiTwotoneFolderOpen,
	AiOutlineWhatsApp,
} from 'react-icons/ai';
import { useRef, useEffect } from 'react';

export default ({ setSectionsHeight, sectionsHeight }) => {
	const ref = useRef(null);
	useEffect(() => {
		let heightArr = sectionsHeight;
		heightArr[2] = ref.current.clientHeight;
		setSectionsHeight(heightArr);
		console.log(sectionsHeight);
	}, []);
	return (
		<div className="contactDiv" id="contact" ref={ref}>
			<div className="myInfo">
				<div>
					<span>{`<name/>`}</span>Lucas Pennice
				</div>
				<div>
					<span>{`<phone/>`}</span>+5493413584946
				</div>
				<div>
					<span>{`<location/>`}</span>Rosario, Santa Fe, Argentina
				</div>
				<div>
					<span>{`<email/>`}</span>lucaspennice@gmail.com
				</div>
			</div>
			<div className="iconsContact">
				<div>
					<a
						href="http://www.linkedin.com/in/lucas-pennice"
						target="_blank"
						rel="noreferrer"
					>
						<AiFillLinkedin id="linkedin" />
					</a>
					<span>LinkedIn</span>
				</div>
				<div>
					<a
						href="https://github.com/LucasPennice"
						target="_blank"
						rel="noreferrer"
					>
						<AiFillGithub id="github" />
					</a>
					<span>GitHub</span>
				</div>
				<div>
					<a
						href="https://docs.google.com/document/d/e/2PACX-1vRu_S7LLF2c33QBm_Aw21__6pLKNl9GLv95IwgdpNcO2zIdTT6mGAzxz3QESO1w3cagji3VDmqRet7y/pub"
						target="_blank"
						rel="noreferrer"
					>
						<AiTwotoneFolderOpen id="resume" />
					</a>
					<span>CV</span>
				</div>
				<div>
					<a
						href="https://wa.me/5493413584946"
						target="_blank"
						rel="noreferrer"
					>
						<AiOutlineWhatsApp id="whatsapp" />
					</a>
					<span>WhatsApp</span>
				</div>
			</div>
			<form
				action="mailto:lucaspennice@gmail.com"
				method="POST"
				encType="multipart/form-data"
			>
				<label htmlFor="name">name</label>
				<input type="text" name="name" id="name" required />
				<label htmlFor="email">email</label>
				<input type="email" name="email" id="email" required />
				<label htmlFor="subject">subject</label>
				<input type="text" name="subject" id="subject" />
				<label htmlFor="message">message</label>
				{/* <input type="text" name="message" id="message" required />
				 */}
				<textarea
					name="message"
					id="message"
					required
					rows="10"
					cols="50"
				></textarea>
				<button>send</button>
			</form>
		</div>
	);
};
