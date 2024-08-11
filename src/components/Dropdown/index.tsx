import cls from 'classnames';
import styles from './index.module.css';
import { useState } from 'react';
import Arrow from '../../../public/svgs/dropdown.svg';

export type DropdownOption = {
	label: string;
	value: string;
};

export type DropdownProps = {
	className?: string;
	options: DropdownOption[];
	note: string;
	theme: 'orange' | 'purple';
};

const getDisplayedOptions = (options: DropdownOption[], selectedOption: DropdownOption) => {
	const displayedOptions = [];
	for (const option of options) {
		if (option.value !== selectedOption.value) displayedOptions.push(option);
	}
	return displayedOptions;
};

export const Dropdown = (props: DropdownProps) => {
	const { className, options: propOptions, note, theme } = props ?? {};
	const [selectedOption, setSelectedOption] = useState<DropdownOption>(propOptions[0]);
	const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
	const displayedOptions = getDisplayedOptions(propOptions, selectedOption);

	return (
		<div className={cls(styles.dropdown, className)}>
			<div className={styles.note}>{note}</div>
			<div
				className={cls(styles.selected, styles[theme], {
					[styles.isDropdownOpen]: isDropdownOpen,
				})}
				onClick={() => setIsDropdownOpen(!isDropdownOpen)}
			>
				<div className={styles.label}>{selectedOption.label}</div>
				<img
					src={`./svgs/${theme}Arrow.svg`}
					className={cls(styles.arrow, {
						[styles.inverted]: !isDropdownOpen,
					})}
				/>
				{isDropdownOpen && (
					<div className={styles.options}>
						{displayedOptions.map(({ label, value }) => (
							<div
								className={cls(styles.option, styles[theme])}
								onClick={() => {
									setSelectedOption({ label, value });
									setIsDropdownOpen(false);
								}}
							>
								{label}
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};
