import cls from 'classnames';
import { ColorfulBox } from '../../../components/ColorfulBox';
import styles from './index.module.css';
import { ColorfulBoxDropdown } from '../../../components/ColorfulBoxDropdown';

export const Layout1 = () => {
	return (
		<>
			<div className={styles.firstLine}>
				<ColorfulBox
					className={cls(
						styles.firstLineItem,
						styles.firstLineItem1,
						styles.firstLineName,
					)}
					note="First name"
					content="Sophia"
				/>
				<ColorfulBox
					className={cls(
						styles.firstLineItem,
						styles.firstLineItem2,
						styles.firstLineName,
					)}
					note="Last name"
					content="Liu"
				/>
				<span className={styles.firstLineItem3}>is a</span>
				<ColorfulBoxDropdown
					className={cls(styles.firstLineItem, styles.firstLineItem4)}
					note="My role"
					content="Product Designer"
				/>
			</div>
			<div className={styles.secondLine}>
				<span className={styles.secondLineItem1}>who</span>
				<ColorfulBoxDropdown
					note="What I do"
					content="advocates for user-centered design"
				/>
			</div>
		</>
	);
};
