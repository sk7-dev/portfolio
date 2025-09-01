import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from './types';

const items: Array<Project> = [
	{
		slug: 'tiktok',
		color: '#e35e5e',
		description:
			'This project develops a machine learning pipeline to classify TikTok video transcriptions as claims or opinions. Starting with exploratory data analysis and hypothesis testing, the project refined feature representations and applied multiple classification algorithms. Through systematic validation and hyperparameter optimization, the models were tuned for high recall and reliable generalization, resulting in a robust content classification system. <br> <br> <center><b>Highlights</b></center><br><ul><li><b>End-to-End Pipeline:</b> Conducted data cleaning, exploratory analysis, and hypothesis testing before building classification models.</li><br> <li><b>Modeling & Tuning:</b> Implemented Random Forest and XGBoost with GridSearchCV, applying feature selection and parameter optimization to maximize recall.</li><br> <li><b>Performance Achievements:</b>Reached 99.48% recall with stable validation results, supported by confusion matrices, classification reports, and comparative model evaluation.</li></ul>',
		shortDescription:
			'An ML pipeline using Random Forest and XGBoost for classifying TikTok transcriptions into claims and opinions',
		links: [
			{
				to: 'https://github.com/sk7-dev/Data_Analysis_and_Modelling/tree/main/TikTok_Analytics',
				label: 'GitHub'
			}
		],
		logo: Assets.tiktok,
		name: 'TikTok Claim Classifier',
		period: {
			from: new Date(2024, 9, 10),
			to: new Date(2024, 11, 12)
		},
		skills: getSkills(
			'Machine Learning',
			'XGBoost',
			'Text Classification',
			'Natural Language Processing'
		),
		type: 'Data Science',
		screenshots: [
			{
				label: 'Confusion Matrix',
				src: 'https://res.cloudinary.com/dhohvytuw/image/upload/v1756624755/output_fjqytr.png'
			}
		]
	},
	{
		slug: 'azurep1',
		color: '#ff3e00',
		description:
			'This project implements a scalable Sales Data Pipeline on Microsoft Azure, integrating on-premises SQL Server with cloud-based data processing and visualization. The pipeline automates data ingestion, transformation, and reporting using Azure Data Factory, Databricks, Synapse Analytics, and Power BI. With built-in security through Azure Key Vault and Active Directory, the solution ensures both reliability and compliance while enabling real-time business insights. <br> <br> <center><b>Highlights</b></center><br><ul><li><b>Automated Data Pipeline:</b> Connected on-premises SQL Server to Azure using Data Factory for seamless ingestion and storage in a data lake.</li><br> <li><b>ETL & Analytics:</b> Performed PySpark-based ETL transformations in Databricks and stored refined datasets in Synapse Analytics for advanced querying and reporting.</li><br> <li><b>Secure Visualization:</b> Integrated Power BI dashboards for interactive sales analysis, with role-based access and credential management handled via Azure Active Directory and Key Vault.</li></ul>',
		shortDescription: 'An end-to-end Azure Data Pipeline',
		links: [{ to: 'https://github.com', label: 'GitHub' }],
		logo: Assets.Azure,
		name: 'Sales Data Pipeline',
		period: {
			from: new Date()
		},
		skills: getSkills('Azrue DataFactory', 'ts', 'tailwind', 'sass'),
		type: 'Data Engineering',
		screenshots: [
			{
				label: 'Data Pipeline',
				src: 'https://res.cloudinary.com/dhohvytuw/image/upload/v1742571341/azp1_iacvuf.jpg'
			},
			{
				label: 'Dashboard',
				src: 'https://res.cloudinary.com/dhohvytuw/image/upload/v1756672113/Dashboard4_ikcral.png'
			}
		]
	},

	{
		slug: 'el-clasico-analysis',
		color: '#9ce35e',
		description:
			'This project analyzes the legendary El Clásico rivalry between FC Barcelona and Real Madrid by combining Python- and Excel-based exploratory data analysis with interactive Tableau visualizations. Using historical data from Wikipedia and Transfermarkt, the study highlights long-term shifts in dominance, goal-scoring patterns, venue-specific outcomes, and competition-wise performances. The dashboards offer an engaging storytelling experience, helping fans and analysts uncover trends that define over a century of rivalry. <br> <br> <center><b>Highlights</b></center><br><ul><li><b>Data Preparation & EDA:</b> Scraped and cleaned match data (1902–2025) from Wikipedia and Transfermarkt; performed exploratory analysis in Python and Excel to identify trends in wins, goals, and player performance.</li><br> <li><b>Interactive Dashboards:</b> Designed Tableau dashboards such as Player vs Player scoring treemaps, Wins per Decade, Goals per Decade, venue-based outcomes, and competition-wise dominance charts.</li><br> <li><b>Insights-Driven Storytelling:</b> Revealed long-term dominance shifts, goal-scoring peaks, the influence of home field, and competition-specific performance trends, enriching understanding of El Clásico’s evolving legacy.</li></ul>',
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
		slug: 'magiquill',
		color: '#e35e5e',
		description:
			'This project presents a transformer-based language model trained on diverse datasets—including Shakespeare, QnA, Ponniyin Selvan, and Harry Potter—using GPT-style attention mechanisms with self-attention, feed-forward layers, and dropout. Through iterative phases of optimization, the model demonstrated substantial improvements in training stability, generalization, and predictive accuracy, making it a strong foundation for multilingual and real-time applications. <br> <br> <center><b>Highlights</b></center><br><ul><li><b>Iterative Optimization:</b> Applied weight decay, learning rate adjustments, dropout tuning, and hyperparameter optimization to progressively enhance performance.</li><br> <li><b>Performance Gains:</b> Achieved reductions of up to 77.77% in training loss and 34.28% in validation loss, improving model generalization and reducing overfitting.</li><br> <li><b>Future Scope:</b> Plans include multilingual support, real-time deployment optimization, and expansion of dataset diversity for broader applicability.</li></ul>',
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
		type: 'Deep Learning'
	},
	{
		slug: 'crypto-currency',
		color: '#ff3e00',
		description:
			'This project explores behavioral and demographic factors influencing cryptocurrency investment using survey data from over 6,000 respondents (PEW Research – American Trends Panel). The dataset was cleaned, preprocessed, and modeled using SPSS, Logistic Regression, and K-Nearest Neighbors (KNN). By identifying key predictors such as payment app usage, knowledge of cryptocurrency/NFTs, and online betting experience, the analysis achieved strong predictive performance and generated actionable insights for risk mitigation and policymaking. <br> <br> <center><b>Highlights</b></center><br><ul><li><b>Data Cleaning & Preprocessing:</b> Handled missing values, recoded categorical features, validated data quality, and engineered variables from behavioral and demographic survey responses.</li><br> <li><b>Modeling & Accuracy:</b>Implemented Logistic Regression and KNN, reaching up to 85% accuracy across subsets while ensuring generalization and minimizing overfitting.</li><br> <li><b>Impact:</b> Findings highlight risk factors, financial literacy gaps, and behavioral patterns supporting better policy development, consumer protection, and financial risk assessment.</li></ul>',
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
