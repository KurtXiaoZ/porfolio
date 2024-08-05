import cls from 'classnames';
import styles from './index.module.css';
import ArrowIcon from './svgs/arrow.svg';

type BrowseWorkPromptProps = {
	onClick?: () => void;
};

export const BrowseWorkPrompt = (props: BrowseWorkPromptProps) => {
	const { onClick = () => undefined } = props;

	return (
		<div className={styles.prompt} onClick={onClick}>
			<div className={styles.text}>Browse my work</div>
			<img src={'./svgs/BrowseWorkPromptArrow.svg'} className={styles.arrow} />
		</div>
	);
};
