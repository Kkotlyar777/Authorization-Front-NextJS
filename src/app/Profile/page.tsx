import styles from './profile.module.sass';

export default function Profile() {
	let name = 'L1MBO';
	return (
		<>
			<h1>Добро пожаловать, {name}</h1>
			<span></span>
			<img></img>
			<button style={{ width: '300px', height: '50px' }}>Выйти </button>
		</>
	);
}
