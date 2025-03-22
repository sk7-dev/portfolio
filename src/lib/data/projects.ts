import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from './types';

const items: Array<Project> = [
	{
		slug: 'magiquill',
		color: '#e35e5e',
		description:
			'This project presents a transformer-based language model trained on diverse datasets—including Shakespeare, QnA, Ponniyin Selvan, and Harry Potter—using GPT-style attention mechanisms with self-attention, feed-forward layers, and dropout. Through three iterative improvement phases involving weight decay, learning rate adjustments, dropout tuning, and hyperparameter optimization, the model achieved significant gains in training and validation loss reductions—up to 77.77% and 34.28%, respectively. These enhancements improved model generalization and reduced overfitting, leading to more stable and accurate text generation. Future work includes adding multilingual support, optimizing for real-time deployment, and expanding dataset diversity.This project implements a transformer-based language model with iterative improvements to reduce overfitting, optimize training, and improve generalization. By leveraging advanced deep learning techniques, the model achieves substantial gains in prediction accuracy and stability across datasets.',
		shortDescription: 'A transformer-based language model trained on diverse text corpora.',
		links: [
			{
				to: 'https://github.com/sk7-dev/GPT_Based_Language_Model',
				label: 'GitHub'
			},
			{
				to: 'https://drive.google.com/file/d/1NHBxntMm1E-dU1n9Swt-c_dFZtq8DCih/preview',
				label: 'Presentation'
			}
		],
		logo: Assets.LLMi,
		name: 'MagiQuill',
		period: {
			from: new Date(2024, 9, 10),
			to: new Date(2024, 11, 12)
		},
		skills: getSkills('Transformer', 'AndamW', 'LLM'),
		type: 'Language Model'
	},
	{
		slug: 'el-clasico-analysis',
		color: '#9ce35e',
		description:
			'This project implements a transformer-based language model with iterative improvements to reduce overfitting, optimize training, and improve generalization. By leveraging advanced deep learning techniques, the model achieves substantial gains in prediction accuracy and stability across datasets.',
		shortDescription:
			'Detailed El-Clásico analysis with visuals highlighting team performance, player impact, and historical trends.',
		links: [
			{
				to: 'https://github.com/sk7-dev/Data_Analysis_and_Prediction/tree/main/Python/web_scraping/el_clasico',
				label: 'GitHub'
			},
			{
				to: 'https://public.tableau.com/app/profile/shiv.karthee.janardhanan/viz/El_clasico/Story1',
				label: 'Tableau Public'
			}
		],
		logo: Assets.Tableau,
		name: 'El-Clasico Analysis',
		period: {
			from: new Date()
		},
		skills: getSkills('Python', 'Tableau', 'Excel'),
		type: 'Data Visualization',
		screenshots: [
			{
				label: 'Wins',
				src: 'https://res.cloudinary.com/dhohvytuw/image/upload/v1742548209/ELC1_uwu8bm.jpg'
			},
			{
				label: 'Goals',
				src: 'https://res.cloudinary.com/dhohvytuw/image/upload/v1742548210/ELC2_hew3sd.jpg'
			},
			{
				label: 'Players',
				src: 'https://res.cloudinary.com/dhohvytuw/image/upload/v1742548210/ELC3_mryr92.jpg'
			}
		]
	},
	{
		slug: 'azurep1',
		color: '#ff3e00',
		description: ' ',
		shortDescription: 'An end-to-end Azure Data Pipeline',
		links: [{ to: 'https://github.com', label: 'GitHub' }],
		logo: Assets.Azure,
		name: 'Sales Data Pipeline',
		period: {
			from: new Date()
		},
		skills: getSkills('Azrue DataFactory', 'ts', 'tailwind', 'sass'),
		type: 'Data Pipeline',
		screenshots: [
			{
				label: 'Data Pipeline',
				src: 'https://res.cloudinary.com/dhohvytuw/image/upload/v1742571341/azp1_iacvuf.jpg'
			}
		]
	},
	{
		slug: 'crypto-currency',
		color: '#ff3e00',
		description:
			'This project investigates the factors influencing cryptocurrency investment using data from the American Trends Panel Wave 111 by the PEW Research Center. By analyzing behavioral and demographic variables such as age, gender, marital status, online betting, NFT investment, and cryptocurrency knowledge, the study applies Logistic Regression and K-Nearest Neighbors (KNN) to classify individuals as crypto investors or non-investors. After thorough data cleaning and feature engineering, both models showed strong predictive performance, with Logistic Regression achieving up to 85% accuracy and KNN up to 84%. Key insights reveal that men, individuals knowledgeable about crypto and NFTs, and users of online payment platforms are more likely to invest in cryptocurrency. These findings contribute to understanding the drivers of crypto adoption and offer a foundation for further research and policy considerations.',
		shortDescription:
			'Analyzing PEW-survey data to identify factors influencing individuals to invest in cryptocurrency.',
		links: [
			{
				to: 'https://github.com/sk7-dev/Data_Analysis_and_Prediction/tree/main/SPSS/Crypto_Currency_Prediction',
				label: 'Github'
			},
			{
				to: 'https://drive.google.com/file/d/1FcKQFvsp_B038Jn2jly3eES0t3h9ZAlT/preview',
				label: 'Presentation'
			}
		],
		logo: Assets.DAn,
		name: 'Analyzing Factors Influencing Cryptocurrency Investment',
		period: {
			from: new Date(2024, 9, 10),
			to: new Date(2024, 11, 12)
		},
		skills: getSkills('SPSS', 'Regression', 'KNN'),
		type: 'Data Analysis',
		screenshots: [
			{
				label: 'Key Features',
				src: 'https://res.cloudinary.com/dhohvytuw/image/upload/v1742570877/BDA_Presentation_ltdcra.jpg'
			},
			{
				label: 'Datasets',
				src: 'https://res.cloudinary.com/dhohvytuw/image/upload/v1742570742/9_nq0jli.jpg'
			},
			{
				label: 'Results',
				src: 'https://res.cloudinary.com/dhohvytuw/image/upload/v1742570742/13_gn2fhy.jpg'
			}
		]
	}
];

const title = 'Projects';

const ProjectsData = { title, items };

export default ProjectsData;
