import cls from 'classnames';
import styles from './index.module.css';
import { Easing, Tween } from '@tweenjs/tween.js';
import { useRef } from 'react';

export type StarProps = {
	src: string;
	className?: string;
};

export const Star = (props: StarProps) => {
	const { src, className } = props ?? {};
	const imageRef = useRef<HTMLImageElement>(null);
	const currentDeg = useRef<number>(0);
	const startDeg = useRef<number>(0);

	const starRotate = new Tween({ deg: startDeg.current })
		.to({ deg: startDeg.current + 360 }, 2500)
		.easing(Easing.Sinusoidal.In)
		.onUpdate(({ deg }) => {
			if (!imageRef.current) return;
			currentDeg.current = deg;
			imageRef.current.style.transform = `rotate(${deg}deg)`;
		})
		.onComplete(() => {
			rotate.start();
			animateRotate();
		});

	const rotate = new Tween({ deg: startDeg.current })
		.to({ deg: startDeg.current + 360 }, 2000)
		.repeat(Infinity)
		.onUpdate(({ deg }) => {
			if (!imageRef.current) return;
			currentDeg.current = deg;
			imageRef.current.style.transform = `rotate(${deg}deg)`;
		});

	const stopRotate = new Tween({ deg: currentDeg.current })
		.to({ deg: currentDeg.current + 360 }, 2500)
		.onUpdate(({ deg }) => {
			if (!imageRef.current) return;
			currentDeg.current = deg;
			imageRef.current.style.transform = `rotate(${deg}deg)`;
		})
		.onComplete(() => {
			startDeg.current = currentDeg.current;
		});

	const animateStarRotate = () => {
		const animationId = window.requestAnimationFrame(animateStarRotate);
		const isAnimationRunning = starRotate.update();
		if (!isAnimationRunning) window.cancelAnimationFrame(animationId);
		console.log('start');
	};

	const animateRotate = () => {
		const animationId = window.requestAnimationFrame(animateRotate);
		const isAnimationRunning = rotate.update();
		if (!isAnimationRunning) window.cancelAnimationFrame(animationId);
		console.log('ing');
	};

	const animateStopRotate = () => {
		const animationId = window.requestAnimationFrame(animateStopRotate);
		const isAnimationRunning = stopRotate.update();
		if (!isAnimationRunning) window.cancelAnimationFrame(animationId);
		console.log('stop');
	};

	const onMouseEnter = () => {
		starRotate.start();
		animateStarRotate();
	};

	const onMouseOut = () => {
		starRotate.stop();
		rotate.stop();
		stopRotate.start();
		animateStopRotate();
	};

	return (
		<img
			ref={imageRef}
			onMouseEnter={onMouseEnter}
			onMouseOut={onMouseOut}
			src={src}
			className={cls(className)}
		/>
	);
};
