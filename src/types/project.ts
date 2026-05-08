export interface BaseProject {
	id: string;
	title: string;
	description: string;
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
}

export type AnyProject = FlagshipProject | OtherProject;
