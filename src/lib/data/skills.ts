import type { Skill, SkillCategory } from './types';
import type { StringWithAutoComplete } from '@riadh-adrani/utils';
import { omit } from '@riadh-adrani/utils';
import Assets from './assets';
import svelteMd from './md/svelte.md?raw';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Data Stack', slug: 'data-stack' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Data Visualization', slug: 'viz-tool' }),
	defineSkillCategory({ name: 'Web Development', slug: 'web-dev' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' }),
	defineSkillCategory({ name: 'Cloud', slug: 'cloud' }),
	defineSkillCategory({ name: 'Activity', slug: 'activity' }),
	defineSkillCategory({ name: 'Tools', slug: 'tools' }),
	defineSkillCategory({ name: 'Techniques', slug: 'techniques' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => {
	return items.filter((it) => (slugs.length === 0 ? true : slugs.includes(it.slug)));
};

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};

const title = 'Skills';

const items = [
	defineSkill({
		slug: 'py',
		color: 'blue',
		description: 'Python',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'sql',
		color: 'blue',
		description: 'SQL',
		logo: Assets.Sql,
		name: 'SQL',
		category: 'data-stack'
	}),
	defineSkill({
		slug: 'tableau',
		color: 'blue',
		description: 'Tableau',
		logo: Assets.Tableau,
		name: 'Tableau',
		category: 'viz-tool'
	}),
	defineSkill({
		slug: 'fabric',
		color: 'cyan',
		description: 'Fabric',
		logo: Assets.Fabric,
		name: 'Microsoft Fabric',
		category: 'data-stack'
	}),
	defineSkill({
		slug: 'pandas',
		color: 'cyan',
		description: 'Pandas',
		logo: Assets.Panda,
		name: 'Pandas',
		category: 'library'
	}),
	defineSkill({
		slug: 'azure',
		color: 'pink',
		description: 'Azure',
		logo: Assets.Azure,
		name: 'Azure',
		category: 'cloud'
	}),
	defineSkill({
		slug: 'numpy',
		color: 'cyan',
		description: 'Numpy',
		logo: Assets.Numpy,
		name: 'Numpy',
		category: 'library'
	}),
	defineSkill({
		slug: 'Matplotlib',
		color: 'blue',
		description: 'Matplotlib',
		logo: Assets.Mltp,
		name: 'Matplotlib',
		category: 'viz-tool'
	}),
	defineSkill({
		slug: 'PowerBI',
		color: 'blue',
		description: 'PowerBI',
		logo: Assets.PowerBI,
		name: 'PowerBI',
		category: 'viz-tool'
	}),
	defineSkill({
		slug: 'seaborn',
		color: 'cyan',
		description: 'Seaborn',
		logo: Assets.Seaborn,
		name: 'Seaborn',
		category: 'viz-tool'
	}),
	defineSkill({
		slug: 'excel',
		color: 'green',
		description: 'Excel',
		logo: Assets.Excel,
		name: 'Excel',
		category: 'data-stack'
	}),
	defineSkill({
		slug: 'sklearn',
		color: 'cyan',
		description: 'SciKit-learn',
		logo: Assets.Sklearn,
		name: 'Scikit-learn',
		category: 'library'
	}),
	defineSkill({
		slug: 'java',
		color: 'cyan',
		description: 'Java',
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'alteryx',
		color: 'cyan',
		description: 'Alteryx',
		logo: Assets.Alteryx,
		name: 'Alteryx',
		category: 'data-stack'
	}),
	defineSkill({
		slug: 'cpp',
		color: 'cyan',
		description: 'C++',
		logo: Assets.Cpp,
		name: 'C++',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'aws',
		color: 'pink',
		description: 'AWS',
		logo: Assets.AWS,
		name: 'AWS',
		category: 'cloud'
	}),
	defineSkill({
		slug: 'PostgreSQL',
		color: 'pink',
		description: 'PostgreSQL',
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL',
		category: 'data-stack'
	}),
	defineSkill({
		slug: 'HTML',
		color: 'pink',
		description: 'HTML',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'web-dev'
	}),
	defineSkill({
		slug: 'CSS',
		color: 'pink',
		description: 'CSS',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'web-dev'
	}),
	defineSkill({
		slug: 'Angular',
		color: 'pink',
		description: 'Angular',
		logo: Assets.Angular,
		name: 'Angular',
		category: 'web-dev'
	}),
	defineSkill({
		slug: 'NodeJs',
		color: 'pink',
		description: 'NodeJs',
		logo: Assets.NodeJs,
		name: 'NodeJs',
		category: 'web-dev'
	}),
	defineSkill({
		slug: 'synapse',
		color: 'pink',
		description: 'Synapse Analytics',
		logo: Assets.Azure,
		name: 'Synapse',
		category: 'data-stack'
	}),
	defineSkill({
		slug: 'nlp',
		color: 'pink',
		description: 'Natural Language Processing',
		logo: Assets.Python,
		name: 'NLP',
		category: 'library'
	}),
	defineSkill({
		slug: 'xgb',
		color: 'pink',
		description: 'XGBoost',
		logo: Assets.Python,
		name: 'XGBoost',
		category: 'library'
	}),
	defineSkill({
		slug: 'db',
		color: 'pink',
		description: 'Databricks',
		logo: Assets.Azure,
		name: 'Databricks',
		category: 'library'
	}),
	defineSkill({
		slug: 'webscraping',
		color: 'pink',
		description: 'Web Scraping',
		logo: Assets.Python,
		name: 'Web Scraping',
		category: 'Activity'
	}),
	defineSkill({
		slug: 'eda',
		color: 'pink',
		description: 'Exploratory Data Analysis',
		logo: Assets.Python,
		name: 'EDA',
		category: 'Activity'
	}),
	defineSkill({
		slug: 'transformer',
		color: 'pink',
		description: 'Transformers',
		logo: Assets.Python,
		name: 'Transformers',
		category: 'Programming Language'
	}),
	defineSkill({
		slug: 'adamw',
		color: 'pink',
		description: 'AdamW Optimizer',
		logo: Assets.Python,
		name: 'AdamW',
		category: 'Programming Language'
	}),
	defineSkill({
		slug: 'llm',
		color: 'pink',
		description: 'Large Language Models',
		logo: Assets.Python,
		name: 'LLM',
		category: 'Programming Language'
	}),
	defineSkill({
		slug: 'spss',
		color: 'pink',
		description: 'SPSS',
		logo: Assets.Python,
		name: 'SPSS',
		category: 'Tools'
	}),
	defineSkill({
		slug: 'regression',
		color: 'pink',
		description: 'Regression',
		logo: Assets.Python,
		name: 'Regression',
		category: 'Techniques'
	}),
	defineSkill({
		slug: 'knn',
		color: 'pink',
		description: 'K-Nearest Neighbors',
		logo: Assets.Python,
		name: 'KNN',
		category: 'Techniques'
	}),
	defineSkill({
		slug: 'Datawrangling',
		color: 'pink',
		description: 'Data Wrangling',
		logo: Assets.Python,
		name: 'Data Wrangling',
		category: 'Techniques'
	})
] as const;

const SkillsData = {
	title,
	items
};

export default SkillsData;
