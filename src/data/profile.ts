export interface Profile {
	name: string;
	initial: string;
	tagline: string;
	about: string;
	links: {
		github: string;
		linkedin: string;
	};
}

export const profile: Profile = {
	name: 'Karam',
	initial: 'KT',
	tagline: 'Software engineer',
	about: 'Scroll for evidence.',
	links: {
		github: 'https://github.com/thethyka',
		linkedin: 'https://www.linkedin.com/in/karam-thethy',
	},
};
