export interface BaseProject {
	id: string;
	title: string;
	description: string;
	longTitle: string;
	longDescription: string;
	tags: string[];
	year: number;
	url?: string;
	repoUrl?: string;
	screenshot?: string;
}

export interface FlagshipProject extends BaseProject {
	url: string;
}

export interface OtherProject extends BaseProject {
	event: string;
	medal: 'gold' | 'silver';
	awardUrl?: string;
}

export type AnyProject = FlagshipProject | OtherProject;
