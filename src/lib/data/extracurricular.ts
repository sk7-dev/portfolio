import Assets from './assets';
import { getSkills } from './skills';
import type { Highlight } from './types';

const items: Array<Highlight> = [
	{
		kind: 'extracurricular',
		slug: 'ais_tech',
		color: '#8b5cf6',
		description: '',
		shortDescription: '',
		links: [
			{
				to: 'https://www.csulbais.com/',
				label: 'Org'
			},
			{
				to: 'https://www.linkedin.com/posts/aiscsulb_ais-memberofthemonth-techcommittee-activity-7326688297571758080-VF72?utm_source=share&utm_medium=member_desktop&rcm=ACoAADxwVYgBbpuwzSJDk_BFPIss5Wv5_n3pDfs',
				label: 'LinkedIn'
			}
		],
		logo: Assets.ais,
		name: 'AIS CSULB - VP of Tech',
		period: { from: new Date('2025-06-01') },
		skills: getSkills('tableau', 'python', 'viz'),
		type: 'Community Project'
	},
	{
		kind: 'extracurricular',
		slug: 'color-compton-dashboard',
		color: '#8b5cf6',
		description: '',
		shortDescription: '',
		links: [
			{
				to: 'https://drive.google.com/file/d/1aR3VxyZHpOOTMO0iEuVbBsfMMG7g_wOo/view?usp=sharing',
				label: 'Poster'
			},
			{
				to: 'https://www.linkedin.com/posts/csulb-data-science_csulb-csudh-colorcompton-activity-7347007162902003714-VEW5?utm_source=share&utm_medium=member_desktop&rcm=ACoAADxwVYgBbpuwzSJDk_BFPIss5Wv5_n3pDfs',
				label: 'LinkedIn'
			}
		],
		logo: Assets.dslc,
		name: 'Data Science Research: Color Compton',
		period: { from: new Date('2025-06-01'), to: new Date('2025-08-22') },
		skills: getSkills('tableau', 'python', 'viz'),
		type: 'Community Project'
	},
	{
		kind: 'extracurricular',
		slug: 'datathon-winner',
		color: '#f59e0b',
		description: '',
		shortDescription: '',
		links: [
			{
				to: 'https://drive.google.com/file/d/1AQeis_q11Qd94fOrrQHhenRzuNrP3WW3/view?usp=sharing',
				label: 'Presentation'
			},
			{
				to: 'https://public.tableau.com/app/profile/shiv.karthee.janardhanan/viz/Fire_17448828381690/Over_Time',
				label: 'Dashboard'
			}
		],
		logo: Assets.ais,
		name: 'CSULB AIS Datathon 2025 Winner',
		//period: { from: new Date('2025-05-01'), to: new Date('2025-05-01') },
		skills: getSkills('python', 'pandas', 'xgboost'),
		type: 'Competition'
	}
];

const title = 'Activities';

export default { title, items };
