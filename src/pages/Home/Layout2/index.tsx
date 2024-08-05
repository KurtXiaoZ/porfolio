import cls from 'classnames';
import styles from './index.module.css';
import { ColorfulBox } from '../../../components/ColorfulBox';
import { ColorfulBoxDropdown } from '../../../components/ColorfulBoxDropdown';
import { useWindowSize } from '../../../lib/hooks';

export const Layout2 = () => {
	const { width } = useWindowSize();

	return (
		<>
			<div
				className={cls(styles.line, {
					[styles.smallLine]: width < 1000,
				})}
			>
				<ColorfulBox
					className={cls(styles.firstLineItem, styles.firstLineName, {
						[styles.smallFontSize]: width < 1000,
						[styles.smallNameWidth]: width < 750,
					})}
					note="First name"
					content="Sophia"
				/>
				<ColorfulBox
					className={cls(styles.firstLineItem, styles.firstLineName, {
						[styles.smallFontSize]: width < 1000,
						[styles.smallNameWidth]: width < 750,
					})}
					note="Last name"
					content="Liu"
				/>
			</div>
			<div
				className={cls(styles.line, {
					[styles.smallLine]: width < 1000,
				})}
			>
				<div className={styles.text}>is a</div>
				<ColorfulBoxDropdown
					className={cls({
						[styles.smallFontSize]: width < 1000,
					})}
					note="My role"
					content="Product Designer"
				/>
			</div>
			<div
				className={cls(styles.line, {
					[styles.smallLine]: width < 1000,
				})}
			>
				<div className={styles.text}>who</div>
				<ColorfulBoxDropdown
					className={cls({
						[styles.smallFontSize]: width < 1000,
					})}
					note="What I do"
					content="advocates for user-centered design"
				/>
			</div>
		</>
	);
};
