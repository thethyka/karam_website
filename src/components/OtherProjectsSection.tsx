import type { OtherProject } from '../types/project';
import { ProjectCard } from './ProjectCard';
import { SectionLabel } from './SectionLabel';

interface OtherProjectsSectionProps {
	projects: OtherProject[];
	onOpen: (id: string) => void;
}

export function OtherProjectsSection({ projects, onOpen }: OtherProjectsSectionProps) {
	if (projects.length === 0) return null;

	return (
		<section className="mb-16">
			<SectionLabel>Other projects</SectionLabel>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				{projects.map((project) => (
					<ProjectCard key={project.id} project={project} onOpen={onOpen} />
				))}
			</div>
		</section>
	);
}
