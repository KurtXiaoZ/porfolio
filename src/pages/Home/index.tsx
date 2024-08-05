import cls from 'classnames';
import styles from './index.module.css';
import { BrowseWorkPrompt } from '../../components/BrowseWorkPrompt';
import { Work } from '../../components/Work';
import { useWindowSize } from '../../lib/hooks';
import { Layout1 } from './Layout1';
import { Layout2 } from './Layout2';
import { useRef } from 'react';
import { Easing, Tween } from '@tweenjs/tween.js';

export const Home = () => {
	const { width } = useWindowSize();
	const landingPageRef = useRef<HTMLDivElement>(null);

	const getLayout = () => {
		if (width >= 1400) return <Layout1 />;
		return <Layout2 />;
	};

	const getWorkPagePaddingLeftRight = () => {
		if (width >= 1200) return '180px';
		else if (width >= 900) return '100px';
		else return '60px';
	};

	const getFootnoteFontSize = () => {
		if (width >= 1000) return '32px';
		else return '20px';
	};

	const onBrowseWork = () => {
		if (!landingPageRef.current) return;
		let animationId = -1;
		const tween = new Tween({ scrollTop: 0 })
			.to({ scrollTop: landingPageRef.current?.getBoundingClientRect().height }, 500)
			.easing(Easing.Quadratic.In)
			.onUpdate(({ scrollTop }) => {
				window?.scrollTo(0, scrollTop);
			})
			.start();

		const animate = () => {
			animationId = window.requestAnimationFrame(animate);
			const isAnimationRunning = tween.update();
			if (!isAnimationRunning) window.cancelAnimationFrame(animationId);
		};

		animate();
	};

	return (
		<div className={styles.home}>
			<div
				ref={landingPageRef}
				className={cls(styles.landingPage, {
					[styles.paddingLeftRight]: width < 700,
				})}
			>
				{getLayout()}
				<div className={styles.browseProjectsPrompt}>
					<BrowseWorkPrompt onClick={onBrowseWork} />
				</div>
			</div>
			<div
				className={styles.workPage}
				style={{
					paddingLeft: getWorkPagePaddingLeftRight(),
					paddingRight: getWorkPagePaddingLeftRight(),
				}}
			>
				<Work
					backgroundColor="rgba(229, 224, 255, 1)"
					title="Wayfarer AI"
					description="How I designed for AI co-pilot in a travel-planning app"
					className={cls(styles.work, {
						[styles.smallMarginBottom]: width < 1200,
					})}
				/>
				<Work
					backgroundColor="rgba(100, 72, 239, 1)"
					title="Tempo Labs"
					description="How I streamlined the flow of idea to MVP for start-up founders"
					className={cls(styles.work, {
						[styles.smallMarginBottom]: width < 1200,
					})}
				/>
				<Work
					backgroundColor="rgba(45, 180, 229, 1)"
					title="Silver Lining Community"
					description="How I designed for 1-1 relationship growth in the foster care community"
					className={cls(styles.lastWork, {
						[styles.smallMarginBottom]: width < 1200,
					})}
				/>
				<div className={styles.footnote} style={{ fontSize: getFootnoteFontSize() }}>
					<span className={styles.footnoteText}>Contact Me</span>
				</div>
				<div className={styles.footnote} style={{ fontSize: getFootnoteFontSize() }}>
					<span className={styles.footnoteText}>Learn More About Me</span>
				</div>
				<div className={styles.footnote} style={{ fontSize: getFootnoteFontSize() }}>
					<span className={styles.footnoteText}>My Resume</span>
				</div>
			</div>
		</div>
	);
};
