import cls from 'classnames';
import styles from './index.module.css';

export type ColorfulBoxDropdownProps = {
	className?: string;
	note: string;
	content: string;
};

export const ColorfulBoxDropdown = (props: ColorfulBoxDropdownProps) => {
	const { className, note, content } = props ?? {};

	return (
		<div className={cls(styles.colorfulBox, className)}>
			<div className={styles.note}>{note}</div>
			<div className={styles.content}>{content}</div>
			<img src={'./svgs/dropdown.svg'} className={styles.dropdown} />
		</div>
	);
};
