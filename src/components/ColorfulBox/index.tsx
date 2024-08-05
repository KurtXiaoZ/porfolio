import cls from 'classnames';
import styles from './index.module.css';

export type ColorfulBoxProps = {
	className?: string;
	note: string;
	content: string;
};

export const ColorfulBox = (props: ColorfulBoxProps) => {
	const { className, note, content } = props ?? {};

	return (
		<div className={cls(styles.colorfulBox, className)}>
			<div className={styles.note}>{note}</div>
			<div className={styles.content}>{content}</div>
		</div>
	);
};
