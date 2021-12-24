import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { useState } from 'react';

export default ({ imgArray }) => {
	const [currentImg, setCurrentImg] = useState(0);

	const prevImg = () => {
		if (currentImg === 0) return setCurrentImg(imgArray.length - 1);
		setCurrentImg(currentImg - 1);
	};

	const nextImg = () => {
		if (currentImg === imgArray.length - 1) return setCurrentImg(0);
		setCurrentImg(currentImg + 1);
	};

	const renderButtons = () => {
		return imgArray.map((btn) => {
			const currentClass =
				btn === imgArray[currentImg] ? 'circle active' : 'circle inactive';
			return <div className={currentClass}></div>;
		});
	};

	return (
		<div className="image_slider_container">
			<MdNavigateBefore className="before_btn" onClick={prevImg} />
			<div className="slider_container">
				{imgArray.map((image) => {
					return (
						<img
							src={image}
							alt=""
							className={
								image === imgArray[currentImg]
									? 'slider_img show'
									: 'slider_img'
							}
						/>
					);
				})}
			</div>
			{/* <img className="slider_img" src={imgArray[currentImg]} alt="" /> */}
			<MdNavigateNext className="after_btn" onClick={nextImg} />

			<div className="circles_container">
				{renderButtons()}
				{/* <div className="circle active"></div>
				<div className="circle inactive"></div>
				<div className="circle inactive"></div> */}
			</div>
		</div>
	);
};
