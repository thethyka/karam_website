import type { FlagshipProject } from '../types/project';
import { FlagshipCard } from './FlagshipCard';
import { SectionLabel } from './SectionLabel';

interface FlagshipSectionProps {
	projects: FlagshipProject[];
	onOpen: (id: string) => void;
}

export function FlagshipSection({ projects, onOpen }: FlagshipSectionProps) {
	if (projects.length === 0) return null;

	const visible = projects.slice(0, 2);

	return (
		<section className="mb-12">
			<SectionLabel>{visible.length === 1 ? 'Flagship project' : 'Flagship projects'}</SectionLabel>
			<div className="grid grid-cols-1 gap-5">
				{visible.map((project) => (
					<FlagshipCard key={project.id} project={project} onOpen={onOpen} />
				))}
			</div>
		</section>
	);
}
