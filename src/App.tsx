import { useCallback, useMemo, useState } from 'react';
import { WaveFooter } from './components/WaveFooter';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { FlagshipSection } from './components/FlagshipSection';
import { OtherProjectsSection } from './components/OtherProjectsSection';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import { profile } from './data/profile';
import { flagshipProjects, otherProjects } from './data/projects';
import type { AnyProject } from './types/project';

function App() {
	const [selectedId, setSelectedId] = useState<string | null>(null);

	const navLinks = useMemo(
		() => [
			{ label: 'GitHub', href: profile.links.github },
			{ label: 'LinkedIn', href: profile.links.linkedin },
			{ label: 'Resume', href: profile.links.resume },
		],
		[]
	);

	const projectsById = useMemo(() => {
		const map = new Map<string, AnyProject>();
		for (const p of flagshipProjects) map.set(p.id, p);
		for (const p of otherProjects) map.set(p.id, p);
		return map;
	}, []);

	const openProject = useCallback((id: string) => setSelectedId(id), []);
	const closeProject = useCallback(() => setSelectedId(null), []);

	const selectedProject = selectedId ? (projectsById.get(selectedId) ?? null) : null;

	return (
		<>
			<div className="relative z-10 mx-auto max-w-3xl px-5 pt-8 sm:px-8 sm:pt-10">
				<Nav logo={"karamthethy.au"} links={navLinks} />

				<Hero name={profile.name} initial={profile.initial} tagline={profile.tagline} about={profile.about} />

				<FlagshipSection projects={flagshipProjects} onOpen={openProject} />

				<OtherProjectsSection projects={otherProjects} onOpen={openProject} />

				<Footer name={profile.name} />
			</div>

			<div className="pointer-events-none relative z-0 -mt-28">
				<WaveFooter />
			</div>

			<Modal project={selectedProject} onClose={closeProject} />
		</>
	);
}

export default App;
