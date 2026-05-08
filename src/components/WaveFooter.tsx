import { useEffect, useRef } from 'react';

interface WaveConfig {
	amplitude: number;
	frequency: number;
	speed: number;
	phase: number;
	yOffset: number;
	color: string;
}

const WAVES: WaveConfig[] = [
	{
		amplitude: 24,
		frequency: 0.011,
		speed: 0.0008,
		phase: 0,
		yOffset: 50,
		color: 'rgba(163, 177, 138, 0.34)',
	},
	{
		amplitude: 30,
		frequency: 0.008,
		speed: -0.0006,
		phase: 1.2,
		yOffset: 68,
		color: 'rgba(193, 115, 80, 0.30)',
	},
	{
		amplitude: 18,
		frequency: 0.017,
		speed: 0.0013,
		phase: 2.4,
		yOffset: 84,
		color: 'rgba(143, 160, 120, 0.26)',
	},
	{
		amplitude: 12,
		frequency: 0.024,
		speed: -0.0011,
		phase: 3.6,
		yOffset: 96,
		color: 'rgba(212, 149, 110, 0.22)',
	},
];

const HEIGHT = 120;

export function WaveFooter() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const parent = canvas.parentElement;
		if (!parent) return;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const dpr = Math.min(window.devicePixelRatio || 1, 2);
		let width = 0;

		const resize = () => {
			width = parent.offsetWidth;
			canvas.width = Math.round(width * dpr);
			canvas.height = Math.round(HEIGHT * dpr);
			canvas.style.width = `${width}px`;
			canvas.style.height = `${HEIGHT}px`;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		};

		resize();

		const ro = new ResizeObserver(resize);
		ro.observe(parent);

		let raf = 0;
		const draw = (t: number) => {
			ctx.clearRect(0, 0, width, HEIGHT);
			for (const wave of WAVES) {
				ctx.beginPath();
				ctx.moveTo(0, HEIGHT);
				for (let x = 0; x <= width; x += 4) {
					const y = wave.yOffset + Math.sin(x * wave.frequency + t * wave.speed + wave.phase) * wave.amplitude;
					ctx.lineTo(x, y);
				}
				ctx.lineTo(width, HEIGHT);
				ctx.closePath();
				ctx.fillStyle = wave.color;
				ctx.fill();
			}
			raf = requestAnimationFrame(draw);
		};
		raf = requestAnimationFrame(draw);

		return () => {
			cancelAnimationFrame(raf);
			ro.disconnect();
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			aria-hidden="true"
			className="pointer-events-none block h-30 w-full"
		/>
	);
}
