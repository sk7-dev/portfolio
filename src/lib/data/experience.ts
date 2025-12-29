import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';

const title = 'Experience';

const items: Array<Experience> = [
	{
		slug: 'ra',
		company: 'California State University, Long Beach',
		description:
			'Working as a Data Analyst – Research Assistant at California State University, Long Beach, supporting data-driven research through large-scale data preparation, statistical analysis, and machine learning modeling. Contribute to end-to-end research workflows by ensuring data quality, applying rigorous analytical methods, and translating findings into publishable research outputs with a strong emphasis on statistical validity and transparency.<br><br> <center><b>Highlights</b></center><br><ul><li><b></b>Cleaned, merged, and validated 100,000+ record datasets using Python, reducing data errors by 99%</li><br> <li><b></b>Applied A/B testing and chi-square analysis with domain clustering and covariates to quantify corrosion impact</li><br> <li><b></b>Trained and evaluated multiple machine learning models, improving baseline accuracy from 47% to 73%, and co-authored research papers with statistically rigorous reporting</li></ul>',
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
		description:
			'Worked as a Backend Developer Intern at Steam Troops Innovation Labs, focusing on building and optimizing scalable server-side applications to efficiently handle large datasets. Contributed to backend architecture using Node.js, improved data exchange through API integrations, and applied database optimization techniques to significantly enhance application performance and responsiveness.<br><br> <center><b>Highlights</b></center><br><ul><li><b></b>Developed server-side applications using Node.js to process and manage large datasets efficiently</li><br> <li><b></b>Designed and optimized database queries and API integrations to enable seamless data exchange and transformation</li><br> <li><b></b>Improved backend performance by applying database optimization techniques, reducing page load times by 30%</li></ul>',
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
			'Worked as a Data Engineer at Tata Consultancy Services (TCS), contributing to large-scale enterprise data platforms by designing, optimizing, and maintaining robust data pipelines. Played a key role in improving data reliability, performance, and accessibility through advanced SQL development, ETL optimization using Informatica PowerCenter, and database automation with PL/SQL. Collaborated closely with cross-functional teams to ensure data quality, resolve high-priority production issues, and consistently meet stringent SLA requirements in a fast-paced, client-facing environment.<br><br> <center><b>Highlights</b></center><br><ul><li><b></b>Designed and optimized ETL pipelines using Informatica PowerCenter, improving data workflow performance by 10%</li><br> <li><b></b>Developed complex SQL queries and PL/SQL stored procedures to automate multi-database workflows, increasing operational efficiency by 50%</li><br> <li><b></b>Resolved 150+ critical database and application performance issues, ensuring 100% SLA compliance through cross-functional collaboration</li></ul>',
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
