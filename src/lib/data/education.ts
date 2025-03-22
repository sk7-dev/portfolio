import Assets from './assets';
import type { Education } from './types';

const title = 'Education';

const items: Array<Education> = [
	{
		degree: 'Master of Science in Information Systems',
		description: '',
		location: 'USA',
		logo: Assets.CSULB,
		name: '',
		organization: 'CSULB',
		period: { from: new Date(2024, 7, 15) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Data Science', 'Machine Learning', 'Statistics', 'Data Analysis']
	},
	{
		degree: 'Bachelor of Engineering in Computer Science and Engineering',
		description: '',
		location: 'India',
		logo: Assets.REC,
		name: '',
		organization: 'Rajalakshmi Engineering College',
		period: { from: new Date(2016, 7, 8), to: new Date(2020, 3, 4) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['C', 'Java', 'Database Management System', 'Python', 'C++', 'Applied Mathematics']
	}
];

const EducationData = { title, items };

export default EducationData;
