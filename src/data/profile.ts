import resumeUrl from './resume.pdf?url';

export interface Profile {
	name: string;
	initial: string;
	tagline: string;
	about: string;
	links: {
		github: string;
		linkedin: string;
		resume: string;
	};
}

export const profile: Profile = {
	name: 'Karam',
	initial: 'K',
	tagline: 'Software engineer.',
	about: 'Currently looking for new opportunities.',
	links: {
		github: 'https://github.com/thethyka',
		linkedin: 'https://www.linkedin.com/in/karam-thethy',
		resume: resumeUrl,
	},
};
