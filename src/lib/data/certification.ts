import Assets from './assets';
import { getSkills } from './skills';
import type { Certification } from './types';

const items: Array<Certification> = [
	{
		slug: 'fabric',
		color: '#ff3e00',
		description: '',
		shortDescription: '',
		links: [
			{
				to: 'https://learn.microsoft.com/en-us/users/shivkartheejanardhanan-8686/credentials/a8918bd71a2f35a3',
				label: 'Certificate'
			}
		],
		logo: Assets.FabricCert,
		name: 'Fabric Analytics Engineer Associate',
		period: {
			from: new Date('2025-01-28')
		},
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Website Template'
	},
	{
		slug: 'data_analytics',
		color: '#5e95e3',
		description:
			'This project implements a transformer-based language model with iterative improvements to reduce overfitting, optimize training, and improve generalization. By leveraging advanced deep learning techniques, the model achieves substantial gains in prediction accuracy and stability across datasets.',
		shortDescription:
			'This project implements a transformer-based language model with iterative improvements to reduce overfitting, optimize training, and improve generalization. By leveraging advanced deep learning techniques, the model achieves substantial gains in prediction accuracy and stability across datasets.',
		links: [
			{
				to: 'https://coursera.org/share/f4162a26b298fa8baa040a07f251fe1a',
				label: 'Certificate'
			}
		],
		logo: Assets.dacert,
		name: 'Google Advanced Data Analytics',
		period: {
			from: new Date('2025-04-20')
		},
		skills: getSkills('Transformer', 'AndamW', 'LLM'),
		type: 'Large Language Model'
	},
	{
		slug: 'aws_cloud',
		color: '#5e95e3',
		description:
			'This project implements a transformer-based language model with iterative improvements to reduce overfitting, optimize training, and improve generalization. By leveraging advanced deep learning techniques, the model achieves substantial gains in prediction accuracy and stability across datasets.',
		shortDescription:
			'This project implements a transformer-based language model with iterative improvements to reduce overfitting, optimize training, and improve generalization. By leveraging advanced deep learning techniques, the model achieves substantial gains in prediction accuracy and stability across datasets.',
		links: [
			{
				to: 'https://www.credly.com/badges/53e72476-77a0-44d8-ba89-91fa9c2b3a32/public_url',
				label: 'Certificate'
			}
		],
		logo: Assets.AWSCert,
		name: 'AWS: Cloud Foundations',
		period: {
			from: new Date('2024-12-09')
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
			{
				to: 'https://drive.google.com/file/d/1nQm004QB5EtVQl7pCjNZ5uXhoI4H1-b7/view?usp=sharing',
				label: 'Certificate'
			}
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
			{
				to: 'https://www.credly.com/badges/035600c8-ad1b-4a76-8bcf-c10713b4dc18/public_url',
				label: 'Certificate'
			}
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
