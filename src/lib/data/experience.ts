import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';

const title = 'Experience';

const items: Array<Experience> = [
	{
		slug: 'ra',
		company: 'California State University, Long Beach',
		description: '',
		contract: ContractType.PartTime,
		type: 'Data Analyst',
		location: 'Long Beach, California',
		period: {
			from: new Date(2025, 6, 1)
		},
		skills: getSkills('Python', 'Machine Learning'),
		name: 'Research Assistant',
		color: 'blue',
		links: [],
		logo: Assets.CSULB,
		shortDescription: 'Statistical Analysis and Predictive Modeling'
	},
	{
		slug: 'web-developer',
		company: 'Steam Troops Innovation Labs',
		description: 'Creating awesome tools for developers.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Chennai, India',
		period: { from: new Date(2024, 0, 3), to: new Date(2024, 5, 28) },
		skills: getSkills('ts', 'js'),
		name: 'Backend Developer',
		color: 'red',
		links: [],
		logo: Assets.STR,
		shortDescription: 'Backend Development and Database Optimization'
	},
	{
		slug: 'tcs',
		company: 'Tata Consultancy Services',
		description:
			'• Extracted insights using complex SQL queries and data aggregation techniques, enhancing system performance <br> • Accelerated data workflows by 10% by designing and optimizing ETL processes with Informatica PowerCenter<br> • Automated workflows using PL/SQL stored procedures across multiple databases, improving efficiency by 50%<br> •	Resolved 150+ critical database and application performance issues, maintaining 100% SLA compliance<br> • Worked cross-functionally ensuring data quality, accuracy, and seamless collaboration among teams',
		contract: ContractType.FullTime,
		type: 'Data Analyst and Engineer',
		location: 'Chennai, India',
		period: {
			from: new Date(2020, 8, 3),
			to: new Date(2022, 9, 28)
		},
		skills: getSkills('SQL', 'PL/SQL', 'Informatica Powercentre', 'Java'),
		name: 'Data Engineer',
		color: 'blue',
		links: [],
		logo: Assets.TCS,
		shortDescription: 'ETL Development and Workflow Automation'
	}
];

const ExperienceData = { title, items };

export default ExperienceData;
