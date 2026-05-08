import { useEffect, useRef } from 'react';
import type { AnyProject } from '../types/project';
import { Tag } from './Tag';

interface ModalProps {
	project: AnyProject | null;
	onClose: () => void;
}

export function Modal({ project, onClose }: ModalProps) {
	const closeButtonRef = useRef<HTMLButtonElement>(null);
	const previouslyFocused = useRef<HTMLElement | null>(null);

	useEffect(() => {
		if (!project) return;

		previouslyFocused.current = document.activeElement as HTMLElement | null;
		closeButtonRef.current?.focus();

		const originalOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';

		const handleKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
		};
		window.addEventListener('keydown', handleKey);

		return () => {
			window.removeEventListener('keydown', handleKey);
			document.body.style.overflow = originalOverflow;
			previouslyFocused.current?.focus();
		};
	}, [project, onClose]);

	if (!project) return null;

	const isOther = 'event' in project;

	return (
		<div
			role="dialog"
			aria-modal="true"
			aria-labelledby="modal-title"
			onClick={(e) => {
				if (e.target === e.currentTarget) onClose();
			}}
			className="fixed inset-0 z-50 flex items-center justify-center bg-walnut/60 p-6 backdrop-blur-sm"
		>
			<div className="relative w-full max-w-lg rounded-3xl bg-cream p-7 shadow-xl">
				<button
					ref={closeButtonRef}
					type="button"
					onClick={onClose}
					aria-label="Close modal"
					className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-walnut/10 text-walnut transition-colors hover:bg-walnut/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-walnut/40"
				>
					<svg
						width="14"
						height="14"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2.5"
						strokeLinecap="round"
						aria-hidden="true"
					>
						<path d="M18 6L6 18M6 6l12 12" />
					</svg>
				</button>

				<div className="mb-5 flex aspect-[16/9] items-center justify-center overflow-hidden rounded-2xl bg-sage-dark/80 text-sm text-sage">
					{project.screenshot ? (
						<img src={project.screenshot} alt={`${project.title} screenshot`} className="h-full w-full object-cover" />
					) : (
						<span>screenshot</span>
					)}
				</div>

				<h3 id="modal-title" className="m-0 text-xl font-medium text-walnut">
					{project.title}
				</h3>
				<p className="mt-2 mb-4 text-sm leading-relaxed text-muted">{project.description}</p>

				<div className="mb-5 flex flex-wrap gap-2">
					{isOther && <Tag variant="terra">{project.event}</Tag>}
					<Tag variant="walnut">{project.year}</Tag>
					{project.tags.map((tag) => (
						<Tag key={tag} variant="walnut">
							{tag}
						</Tag>
					))}
				</div>

				<div className="flex flex-wrap gap-3">
					{project.url && (
						<a
							href={project.url}
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center gap-2 rounded-full bg-terra px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-terra-light focus:outline-none focus-visible:ring-2 focus-visible:ring-walnut/40"
						>
							<svg
								width="14"
								height="14"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								aria-hidden="true"
							>
								<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
								<polyline points="15 3 21 3 21 9" />
								<line x1="10" y1="14" x2="21" y2="3" />
							</svg>
							Visit site
						</a>
					)}
					{project.repoUrl && (
						<a
							href={project.repoUrl}
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center gap-2 rounded-full border border-walnut/15 bg-white px-5 py-2.5 text-sm font-medium text-walnut transition-colors hover:bg-walnut/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-walnut/40"
						>
							<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
								<path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55 0-.27-.01-1.16-.02-2.1-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.77 1.06.77 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.21.66.8.55C20.22 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
							</svg>
							View code
						</a>
					)}
				</div>
			</div>
		</div>
	);
}
