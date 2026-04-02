import BaseData from './base';
import { getSkills } from './skills';
import type { Skill } from './types';
import { cilEnvelopeClosed } from '@coreui/icons';
import { cibGithub, cibLinkedin, cibTableau } from '@coreui/icons';

const title = 'Home';

const hero: {
	title: string;
	description: string;
	links: Array<{
		label: string;
		href: string;
		icon?: `i-carbon-${string}` | string | object;
		isText?: boolean;
	}>;
} = {
	title: `${BaseData.fullName},`,
	description:
		'I dreamed of being a detective, then a screenwriter, and eventually found my way into data, where I get to be both. I investigate patterns, connect scattered clues, and turn raw information into stories people can use. What started as curiosity became a career: solving problems, finding meaning in complexity, and letting data tell its story.',
	links: [
		{ label: 'GitHub', href: 'https://github.com/sk7-dev', icon: 'i-carbon-logo-github' },
		{
			label: 'LinkedIn',
			href: 'https://www.linkedin.com/in/shiv-karthee-janardhanan-720702243/',
			icon: 'i-carbon-logo-linkedin'
		},
		{
			label: 'Tableau',
			href: 'https://public.tableau.com/app/profile/shiv.karthee.janardhanan/vizzes',
			icon: 'i-carbon-analytics'
		},
		{ label: 'Email', href: 'mailto:karthee.shiv@gmail.com', icon: 'i-carbon-email' },
		{
			label: 'Résumé',
			href: 'https://drive.google.com/file/d/1rJIB7oBHmA9rDZFOls87QsZDaCQuzo7E/view?usp=sharing',
			isText: true
		}
	]
};

const carousel: Array<Skill> = getSkills().slice(0, 23);

const HomeData = {
	title,
	hero,
	carousel
};

export default HomeData;
