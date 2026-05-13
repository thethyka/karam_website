import type { OtherProject } from '../types/project';
import { Tag } from './Tag';

interface ProjectCardProps {
	project: OtherProject;
	onOpen: (id: string) => void;
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
	return (
		<button
			type="button"
			onClick={() => onOpen(project.id)}
			className="block h-full w-full cursor-pointer rounded-2xl bg-white p-5 text-left shadow-sm transition-transform duration-150 hover:-translate-y-1 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-walnut/40"
		>
			<div className="flex items-baseline justify-between gap-2">
				<h4 className="m-0 text-base font-medium text-walnut">{project.title}</h4>
				<span
					className="text-base leading-none"
					aria-label={project.medal === 'gold' ? 'Gold medal — winner' : 'Silver medal — runner-up'}
					title={project.medal === 'gold' ? 'Winner' : 'Runner-up'}
				>
					{project.medal === 'gold' ? '🥇' : '🥈'}
				</span>
			</div>
			<p className="mt-1 mb-3 line-clamp-2 text-xs leading-relaxed text-muted">{project.description}</p>
			<div className="flex flex-wrap gap-1.5">
				<Tag variant="sage">{project.event}</Tag>
				{project.tags.slice(0, 3).map((tag) => (
					<Tag key={tag} variant="terra">
						{tag}
					</Tag>
				))}
			</div>
		</button>
	);
}
