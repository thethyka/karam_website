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
	tagline: 'Software engineer.',
	about: "Check out what I've been up to :)",
	links: {
		github: 'https://github.com/thethyka',
		linkedin: 'https://www.linkedin.com/in/karam-thethy',
	},
};
