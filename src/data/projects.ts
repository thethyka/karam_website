import type { FlagshipProject, OtherProject } from '../types/project';

export const flagshipProjects: FlagshipProject[] = [
	{
		id: 'firetrail',
		title: 'Firetrail',
		url: 'https://firetrail.app',
		description: 'Placeholder',
		tags: ['React', 'Node.js'],
		year: 2024,
	},
];

export const otherProjects: OtherProject[] = [
	{
		id: 'hack1',
		title: 'Hackathon 1',
		description: 'Placeholder',
		tags: ['Python'],
		event: 'HackMelbourne',
		year: 2024,
	},
	{
		id: 'hack2',
		title: 'Hackathon 2',
		description: 'Placeholder',
		tags: ['TypeScript'],
		event: 'UniHack',
		year: 2023,
	},
	{
		id: 'hack3',
		title: 'Hackathon 3',
		description: 'Placeholder',
		tags: ['React'],
		event: 'GovHack',
		year: 2023,
	},
];
