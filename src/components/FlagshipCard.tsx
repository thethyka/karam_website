import type { FlagshipProject } from '../types/project';
import { Tag } from './Tag';

interface FlagshipCardProps {
	project: FlagshipProject;
	onOpen: (id: string) => void;
}

export function FlagshipCard({ project, onOpen }: FlagshipCardProps) {
	return (
		<button
			type="button"
			onClick={() => onOpen(project.id)}
			className="group block w-full cursor-pointer rounded-3xl bg-sage p-6 text-left shadow-sm transition-transform duration-150 hover:-translate-y-1 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-walnut/40"
		>
			<div className="mb-5 flex aspect-[16/9] items-center justify-center overflow-hidden rounded-2xl bg-sage-dark/80 text-sm text-sage">
				{project.screenshot ? (
					<img src={project.screenshot} alt={`${project.title} screenshot`} className="h-full w-full object-cover" />
				) : (
					<span>{project.title} screenshot</span>
				)}
			</div>

			<h3 className="m-0 text-xl font-medium text-[#2C3A1F]">{project.title}</h3>
			<p className="mt-2 mb-4 text-sm leading-relaxed text-[#4A5E36]">{project.description}</p>

			<div className="flex flex-wrap items-center gap-2">
				{project.tags.slice(0, 3).map((tag) => (
					<Tag key={tag} variant="sage">
						{tag}
					</Tag>
				))}
				<span className="inline-flex items-center rounded-full bg-terra/20 px-3 py-1 text-xs font-medium text-walnut transition-transform group-hover:translate-x-0.5">
					View project →
				</span>
			</div>
		</button>
	);
}
