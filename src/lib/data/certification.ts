import Assets from './assets';
import { getSkills } from './skills';
import type { Certification } from './types';

const items: Array<Certification> = [
	{
		slug: 'fabric',
		color: '#ff3e00',
		description:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		shortDescription:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		links: [
			{
				to: 'https://learn.microsoft.com/en-us/users/shivkartheejanardhanan-8686/credentials/a8918bd71a2f35a3',
				label: 'Certification'
			}
		],
		logo: Assets.FabricCert,
		name: 'Fabric Analytics Engineer Associate',
		period: {
			from: new Date()
		},
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Website Template'
	},
	{
		slug: 'aws_cloud',
		color: '#5e95e3',
		description:
			'This project implements a transformer-based language model with iterative improvements to reduce overfitting, optimize training, and improve generalization. By leveraging advanced deep learning techniques, the model achieves substantial gains in prediction accuracy and stability across datasets.',
		shortDescription:
			'This project implements a transformer-based language model with iterative improvements to reduce overfitting, optimize training, and improve generalization. By leveraging advanced deep learning techniques, the model achieves substantial gains in prediction accuracy and stability across datasets.',
		links: [{ to: 'https://github.com/sk7-dev/GPT_Based_Language_Model', label: 'GitHub' }],
		logo: Assets.AWSCert,
		name: 'AWS: Cloud Foundations',
		period: {
			from: new Date()
		},
		skills: getSkills('Transformer', 'AndamW', 'LLM'),
		type: 'Large Language Model'
	},
	{
		slug: 'alteryx1',
		color: '#5e95e3',
		description:
			'This project implements a transformer-based language model with iterative improvements to reduce overfitting, optimize training, and improve generalization. By leveraging advanced deep learning techniques, the model achieves substantial gains in prediction accuracy and stability across datasets.',
		shortDescription:
			'This project implements a transformer-based language model with iterative improvements to reduce overfitting, optimize training, and improve generalization. By leveraging advanced deep learning techniques, the model achieves substantial gains in prediction accuracy and stability across datasets.',
		links: [
			{ to: 'https://github.com/sk7-dev/GPT_Based_Language_Model', label: 'GitHub' }
			//{ to: 'https://github.com/RiadhAdrani/', label: 'Reporsitory' },
			//{ to: 'https://svelte.dev/', label: 'Svelte' },
			//{ to: 'https://www.shadcn-svelte.com/', label: 'Shadcn Svelte' }
		],
		logo: Assets.ALTM,
		name: 'Alteryx: Designer Core General Knowledge',
		period: {
			from: new Date()
		},
		skills: getSkills('Transformer', 'AndamW', 'LLM'),
		type: 'Large Language Model'
	},
	{
		slug: 'alteryx2',
		color: '#5e95e3',
		description:
			'This project implements a transformer-based language model with iterative improvements to reduce overfitting, optimize training, and improve generalization. By leveraging advanced deep learning techniques, the model achieves substantial gains in prediction accuracy and stability across datasets.',
		shortDescription:
			'This project implements a transformer-based language model with iterative improvements to reduce overfitting, optimize training, and improve generalization. By leveraging advanced deep learning techniques, the model achieves substantial gains in prediction accuracy and stability across datasets.',
		links: [
			{ to: 'https://github.com/sk7-dev/GPT_Based_Language_Model', label: 'GitHub' }
			//{ to: 'https://github.com/RiadhAdrani/', label: 'Reporsitory' },
			//{ to: 'https://svelte.dev/', label: 'Svelte' },
			//{ to: 'https://www.shadcn-svelte.com/', label: 'Shadcn Svelte' }
		],
		logo: Assets.ALTF,
		name: 'Alteryx: Foundation',
		period: {
			from: new Date()
		},
		skills: getSkills('Transformer', 'AndamW', 'LLM'),
		type: 'Large Language Model'
	}
];

const title = 'Certification';

const CertificationData = { title, items };

export default CertificationData;
