import cls from 'classnames';
import styles from './index.module.css';

export type NameBoxProps = {
	name: string;
	note: string;
	className?: string;
};

export const NameBox = (props: NameBoxProps) => {
	const { name, note, className } = props ?? {};

	return (
		<div className={cls(styles.nameBox, className)}>
			<div className={styles.note}>{note}</div>
			<div className={styles.name}>{name}</div>
		</div>
	);
};
