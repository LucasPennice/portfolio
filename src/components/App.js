import styles from '../style/styles.css';
import WelcomeScreen from './WelcomeScreen';
import MainPage from './MainPage';

export default () => {
	return (
		<div className="appDiv">
			<WelcomeScreen />
			<MainPage />
		</div>
	);
};
