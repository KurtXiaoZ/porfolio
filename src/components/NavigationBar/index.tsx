import { Link } from 'react-router-dom';
import styles from './index.module.css';
import cls from 'classnames';
import { useWindowSize } from '../../lib/hooks';
import { useEffect, useState } from 'react';

export const NavigationBar = () => {
	const { width } = useWindowSize();
	const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

	useEffect(() => {
		if (width >= 650) setIsMenuOpened(false);
	}, [width]);

	return (
		<div
			className={cls(styles.navBar, {
				[styles.smallFontSize]: width < 1000,
				[styles.smallPadding]: width < 1000,
			})}
		>
			<span>Sophia Liu</span>
			{width >= 650 && (
				<>
					<Link
						className={cls(styles.link, {
							[styles.smallMarginRightLink]: width < 1000,
						})}
						to="/"
					>
						<span>Work</span>
					</Link>
					<Link
						className={cls(styles.link, {
							[styles.smallMarginRightLink]: width < 1000,
						})}
						to="/"
					>
						<span>About</span>
					</Link>
					<Link
						className={cls(styles.link, {
							[styles.smallMarginRightLink]: width < 1000,
						})}
						to="/"
					>
						<span>Resume</span>
					</Link>
				</>
			)}
			{width < 650 && (
				<img
					src="./svgs/menu.svg"
					className={styles.menu}
					onClick={() => setIsMenuOpened(!isMenuOpened)}
				/>
			)}
			{isMenuOpened && (
				<div className={styles.links}>
					<Link
						className={cls(styles.link, {
							[styles.smallMarginRightLink]: width < 1000,
						})}
						to="/"
					>
						Work
					</Link>
					<Link
						className={cls(styles.link, {
							[styles.smallMarginRightLink]: width < 1000,
						})}
						to="/"
					>
						About
					</Link>
					<Link
						className={cls(styles.link, {
							[styles.smallMarginRightLink]: width < 1000,
						})}
						to="/"
					>
						Resume
					</Link>
				</div>
			)}
		</div>
	);
};
