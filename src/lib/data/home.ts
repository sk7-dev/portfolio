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
		"Think of me as a data enthusiast who speaks fluent SQL and Python, but also understands the language of full stack web development. Whether I'm diving into data or crafting efficient web applications, I bring both the 'how' and the 'why' to every project.",
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
		{ label: 'Résumé', href: '/pdf/Shiv_Karthee_Janardhanan_Resume.pdf', isText: true }
	]
};

const carousel: Array<Skill> = getSkills();

const HomeData = {
	title,
	hero,
	carousel
};

export default HomeData;
