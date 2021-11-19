import {
	AiFillLinkedin,
	AiFillGithub,
	AiTwotoneFolderOpen,
	AiOutlineMail,
} from 'react-icons/ai';

export default () => {
	return (
		<div className="contactDiv">
			<div className="iconsContact">
				<div>
					<a href="http://www.linkedin.com/in/lucas-pennice">
						<AiFillLinkedin id="linkedin" />
					</a>
					<span>LinkedIn</span>
				</div>
				<div>
					<a href="https://github.com/LucasPennice">
						<AiFillGithub id="github" />
					</a>
					<span>GitHub</span>
				</div>
				<div>
					<a href="https://docs.google.com/document/d/e/2PACX-1vRu_S7LLF2c33QBm_Aw21__6pLKNl9GLv95IwgdpNcO2zIdTT6mGAzxz3QESO1w3cagji3VDmqRet7y/pub">
						<AiTwotoneFolderOpen id="resume" />
					</a>
					<span>Resume</span>
				</div>
				<div>
					<a>
						<AiOutlineMail id="mail" />
					</a>
					<span>lucaspennice@gmail.com</span>
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
