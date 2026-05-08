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
	tagline: 'Software engineer in Melbourne. I build things that are useful, fast, and (hopefully) a bit delightful.',
	about:
		'Currently looking for new opportunities. I love working across the stack — from clean APIs to interfaces people actually enjoy using.',
	links: {
		github: 'https://github.com/',
		linkedin: 'https://www.linkedin.com/',
		resume: '/resume.pdf',
	},
};
