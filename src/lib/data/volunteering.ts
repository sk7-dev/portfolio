import Assets from './assets';
import { getSkills } from './skills';
import type { Highlight } from './types';

const items: Array<Highlight> = [
	{
		kind: 'volunteering',
		slug: 'ais-tech-intern',
		color: '#22c55e',
		description: '',
		shortDescription: '',
		//links: [{ to: 'https://drexel.edu/', label: 'Org' }],
		logo: Assets.CSULB, // swap to your org badge if you have one
		name: 'Moderator at 75th Student Research Competition',
		//period: { from: new Date('2025-01-15'), to: new Date('2025-06-15') },
		skills: getSkills('ts', 'react', 'python'),
		type: 'Student Organization'
	}
];

const title = 'Volunteering';

export default { title, items };
