import cls from 'classnames';
import styles from './index.module.css';
import { NameBox } from '../../../components/NameBox';
import { Dropdown } from '../../../components/Dropdown';
import { DO_OPTIONS, ROLE_OPTIONS } from '../../../lib/constants';
import { useWindowSize } from '../../../lib/hooks';

export const Layout1 = () => {
	const { width } = useWindowSize();
	const getSize = () => {
		if (width >= 1000) return 'default';
		else return 'small';
	};
	return (
		<>
			<div className={cls(styles.prompt, styles.bluePrompt)}>Hello! My name is...</div>
			<div className={styles.row}>
				<NameBox
					note="First name"
					name="Sophia"
					className={cls(styles.name, styles.leftColumn)}
					size={getSize()}
				/>
				<NameBox note="Last name" name="Liu" className={styles.name} size={getSize()} />
			</div>
			<div className={styles.row}>
				<div className={cls(styles.role, styles.leftColumn)}>
					<div className={cls(styles.prompt)}>I am a...</div>
					<Dropdown
						note="My role"
						options={ROLE_OPTIONS}
						theme="orange"
						size={getSize()}
					/>
				</div>
				<div className={styles.do}>
					<div className={cls(styles.prompt)}>who...</div>
					<Dropdown
						note="What I do"
						options={DO_OPTIONS}
						theme="purple"
						size={getSize()}
					/>
				</div>
			</div>
		</>
	);
};
