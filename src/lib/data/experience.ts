import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';

const title = 'Experience';

const items: Array<Experience> = [
	{
		slug: 'web-developer',
		company: 'Steam Troops Innovation Labs',
		description: 'Creating awesome tools for developers.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Chennai, India',
		period: { from: new Date(2024, 0, 3), to: new Date(2024, 5, 28) },
		skills: getSkills('ts', 'js'),
		name: 'Backend Web Developer',
		color: 'red',
		links: [],
		logo: Assets.STR,
		shortDescription: 'Creating awesome tools for developers.'
	},
	{
		slug: 'tcs',
		company: 'Tata Consultancy Services',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.FullTime,
		type: 'Data Analyst and Engineer',
		location: 'Chennai, India',
		period: {
			from: new Date(2020, 8, 3),
			to: new Date(2022, 9, 28)
		},
		skills: getSkills('SQL', 'PL/SQL', 'Informatica Powercentre', 'Java'),
		name: 'Systems Engineer',
		color: 'blue',
		links: [],
		logo: Assets.TCS,
		shortDescription: 'Creating awesome applications for customers.'
	}
];

const ExperienceData = { title, items };

export default ExperienceData;
