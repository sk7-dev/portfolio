import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from './types';

//'<br><br> <center><b>Highlights</b></center><br><ul><li><b></b></li><br> <li><b></b></li><br> <li><b></b></li></ul>',
const items: Array<Project> = [
	{
		slug: 'awsrec',
		color: '#ff3e00',
		description:
			'Built an end-to-end real-time movie recommendation system that combines offline machine learning with streaming data processing to deliver personalized and continuously updated recommendations. The system leverages collaborative filtering trained on historical watch data, enriched with review ratings, sentiment analysis, and genre-based features to generate high-quality baseline recommendations, which are dynamically updated using Kafka and Spark Structured Streaming based on live user activity. Recommendations are stored in Redis for low-latency access and served via FastAPI with fallback logic to ensure availability, and the solution is deployed on AWS EC2 with S3 integration, designed to scale into a fully cloud-native architecture.<br><br> <center><b>Highlights</b></center><br><ul><li><b></b>Built scalable real-time recommendation system using Kafka, Spark Streaming, Redis, FastAPI; processed 10K+ events/min, sub-100ms latency</li><br><li><b></b>Designed hybrid collaborative filtering model using implicit feedback, review sentiment, genre-aware ranking; improved precision@10 by 25%</li><br><li><b></b>Implemented streaming pipeline with Kafka and Spark Structured Streaming; enabled near real-time recommendation updates within 20–30 seconds</li><br> <li><b></b>Deployed end-to-end system on AWS EC2 with S3 data storage; ensured fault tolerance, reproducibility, and scalable architecture</li></ul>',
		shortDescription:
			'A real-time movie recommendation system combining streaming, CF, and low-latency API serving on AWS',
		links: [
			{
				to: 'https://github.com/sk7-dev/Real-time_Hybrid_Recommendation_Engine',
				label: 'GitHub'
			}
		],
		logo: Assets.AWS,
		name: 'Real-Time Hybrid Recommendation Engine',
		period: {
			from: new Date(2026, 2, 10)
		},
		skills: getSkills('py', 'Spark', 'Kafka', 'Redis', 'FastAPI', 'AWS', 'S3 bucket', 'EC2'),
		type: 'Data Engineering'
	},
	{
		slug: 'multimodal',
		color: '#ff3e00',
		description:
			'This project evaluates structured EHR data, chest X-ray images, and multimodal fusion approaches for automated pneumonia detection using the Symile-MIMIC dataset. Multiple models were compared across tabular, image-only, and multimodal settings with a clinical focus on recall. While unimodal models captured partial signal, a two-stage multimodal architecture that fused an XGBoost risk score with CNN image features achieved the best balance of sensitivity and discrimination, demonstrating that carefully designed multimodal learning can improve clinically relevant performance over naïve end-to-end approaches<br><br> <center><b>Highlights</b></center><br><ul><li><b></b>Built and compared structured (XGBoost, MLP), image-only (CNN, ResNet-18), and multimodal models on a unified clinical dataset.</li><br> <li><b></b>Achieved high pneumonia sensitivity (~0.74 recall) using a two-stage CNN + XGBoost fusion model, outperforming unimodal baselines.</li><br> <li><b></b>Showed that explicit multimodal fusion outperforms simple feature concatenation, providing practical design insights for healthcare ML systems</li></ul>',
		shortDescription:
			'Evaluating Multimodal AI Models for Automated Pneumonia Diagnosis by combining clinical data and chest X-rays',
		links: [
			{
				to: 'https://github.com/sk7-dev/Multimodal_Analysis_of_Medical_Data',
				label: 'GitHub'
			},
			{
				to: 'https://drive.google.com/file/d/1mgV-gGQNWp_FMiE6JjessOmmTmXEbD3O/view?usp=sharing',
				label: 'Presentation'
			}
		],
		logo: Assets.DAn,
		name: 'Multimodal Data Analysis for Pneumonia Detection',
		period: {
			from: new Date(2025, 8, 10)
		},
		skills: getSkills('py', 'Deep Learning', 'Multimodal Learning', 'cnn', 'xgb', 'mlp'),
		type: 'Data Science'
	},
	{
		slug: 'ais-microsoft',
		color: '#ff3e00',
		description:
			'<br><br>Led the data engineering efforts for a 4-month, cross-functional student project in collaboration with Microsoft to build a fully automated, end-to-end analytics platform in Microsoft Fabric to simplify student housing decisions. Designed and implemented a production-style ETL pipeline using a medallion architecture and presented the solution at the Microsoft Fabric User Group.<center><b>Highlights</b></center><br><ul><li><b></b>Data Engineering Lead, owning ETL architecture, incremental API ingestion, and pipeline automation in Microsoft Fabric</li><br> <li><b></b>Built a fully automated medallion architecture with schema enforcement, de-duplication, and data quality controls</li><br> <li><b></b>Presented the solution at the Microsoft Fabric User Group, demonstrating a real-world, end-to-end analytics prototype with industry tools</li></ul>',
		shortDescription:
			'Microsoft Fabric data solution enabling insights-driven student housing decisions.',
		links: [
			{
				to: 'https://github.com/sk7-dev/Student_Housing_Project_AIS-x-Microsoft',
				label: 'GitHub'
			},
			{
				to: 'https://drive.google.com/file/d/1mgV-gGQNWp_FMiE6JjessOmmTmXEbD3O/view?usp=sharing',
				label: 'Presentation'
			}
		],
		logo: Assets.Fabric,
		name: 'Student Housing Analytics Platform',
		period: {
			from: new Date(2025, 6, 10)
		},
		skills: getSkills('PySpark', 'fabric', 'etl'),
		type: 'Data Engineering',
		screenshots: [
			{
				label: 'Pipeline',
				src: 'https://res.cloudinary.com/dhohvytuw/image/upload/v1767043057/Dataflow_idiser.jpg'
			},
			{
				label: 'ETL Run',
				src: 'https://res.cloudinary.com/dhohvytuw/image/upload/v1767043057/etl_pipeline_likcz4.png'
			}
		]
	},
	{
		slug: 'waze',
		color: '#ff3e00',
		description:
			'This project analyzed Waze’s 14,999-record user dataset to understand churn behavior and build predictive retention models. I performed exploratory data analysis, investigated missing labels and outliers, engineered behavioral features such as kilometers per driving day, sessions in the last month, and professional-driver indicators, and validated assumptions through hypothesis testing. I then built a logistic regression baseline and advanced tree-based models, including Random Forest and XGBoost, to predict churn across train, validation, and test splits. The final analysis showed that user activity patterns and driving intensity were far stronger churn signals than device type, creating a more targeted, data-driven foundation for retention strategy.<br><br> <center><b>Highlights</b></center><br><ul><li><b></b>Analyzed 14,999 user records across 13 variables, identified 700 missing churn labels, and established a baseline class split of 82.3% retained vs 17.7% churned.</li><br><li><b></b>Discovered strong churn behavior signals: median churned users showed 10.0 drives/day vs 4.1 for retained users and 698 km/day vs 290 km/day, while professional drivers had only 7.6% churn vs 19.9% for non-professionals.</li><br><li><b></b>Proved device type was not a statistically significant driver of average trips using a two-sample t-test (t = 1.46, p = 0.143), helping focus the project on behavioral predictors instead of platform assumptions.</li><br> <li><b></b>Built a baseline logistic regression with 82.4% accuracy, then improved churn capture with XGBoost to 18.1% recall at 81.1% accuracy; threshold tuning further increased recall to 49.9% with F1 = 0.369.</li></ul>',
		shortDescription:
			'End-to-end churn prediction project for Waze, combining analysis, hypothesis testing, feature engineering, and modeling.',
		links: [
			{
				to: 'https://github.com/sk7-dev/User_Churn_Prediction_and_Retention_Analytics',
				label: 'GitHub'
			}
		],
		logo: Assets.waze,
		name: 'Waze User Churn Prediction and Retention Analytics',
		period: {
			from: new Date(2025, 7, 10)
		},
		skills: getSkills('py', 'pandas', 'sklearn', 'rf', 'xgb'),
		type: 'Data Science'
	},
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
			from: new Date(2024, 9, 10)
		},
		skills: getSkills('py', 'pandas', 'sklearn', 'nlp', 'xgb'),
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
			from: new Date(2025, 3, 10)
		},
		skills: getSkills('azure', 'PowerBI', 'synapse', 'db'),
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
			from: new Date(2025, 1, 10)
		},
		skills: getSkills('py', 'tableau', 'excel', 'webscraping', 'eda'),
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
			from: new Date(2024, 9, 10)
		},
		skills: getSkills('transformer', 'nlp', 'adamw', 'llm'),
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
				label: 'GitHub'
			},
			{
				to: 'https://drive.google.com/file/d/1FcKQFvsp_B038Jn2jly3eES0t3h9ZAlT/preview',
				label: 'Presentation'
			}
		],
		logo: Assets.DAn,
		name: 'Analyzing Factors Influencing Cryptocurrency Investment',
		period: {
			from: new Date(2024, 9, 10)
		},
		skills: getSkills('spss', 'regression', 'knn', 'Datawrangling'),
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
