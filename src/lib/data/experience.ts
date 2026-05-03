import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';

const title = 'Experience';

const items: Array<Experience> = [
	{
		slug: 'ra',
		company: 'California State University, Long Beach',
		description:
			'Working as a Data Analyst – Research Assistant at California State University, Long Beach, supporting data-driven research through large-scale data preparation, statistical analysis, and machine learning modeling. Contribute to end-to-end research workflows by ensuring data quality, applying rigorous analytical methods, and translating findings into publishable research outputs with a strong emphasis on statistical validity and transparency.<br><br> <center><b>Highlights</b></center><br><ul><li><b></b>Reduced manual cleaning effort by 60% by developing Python pipelines to clean and validate data, improving the reliability of corrosion-impact modeling through automated quality checks and Git-based version control.</li><br> <li><b></b>Improved model performance (R²) from 0.47 to 0.69 by optimizing a Random Forest model for corrosion-impact prediction through feature engineering, model selection, and hyperparameter tuning, increasing confidence in research findings used for assessment decisions.</li><br> <li><b></b>Reduced analysis time by 40% by engineering an end-to-end predictive analytics solution using statistical analysis, feature engineering, MLflow, and FastAPI deployment, increasing model adoption in downstream workflows.</li></ul>',
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
			'Backend and Data/AI engineer with experience building Python/FastAPI REST APIs, PostgreSQL data models, Redis caching, Dockerized services, GitHub Actions CI/CD, Airflow pipelines, dbt transformations, and Power BI and Excel reporting. Skilled at designing reliable, analytics-ready data workflows that improve performance, automate reporting, and support scalable data products.<br><br> <center><b>Highlights</b></center><br><ul><li><b></b>Architected FastAPI data services and REST APIs, reducing analytics query latency by 42%, by optimizing PostgreSQL schemas, Redis caching, SQL indexes, and Dockerized deployments through GitHub Actions.</li><br> <li><b></b>Built Airflow orchestration for dbt transformations, improving pipeline reliability, by implementing retries, data quality checks, dependency management, and automated GitHub Actions CI for production workloads.</li><br> <li><b></b>Developed PostgreSQL data models powering Power BI dashboards, cutting manual Excel reporting by 70%, by standardizing SQL metrics, dbt marts, and reusable semantic layers across business functions.</li><br><li><b></b>Containerized Python ETL and FastAPI workloads with Docker, decreasing deployment failures by 35%, by adding environment parity, health checks, secrets handling, and CI validation across environments.</li><br> <li><b></b>Integrated backend APIs, PostgreSQL pipelines, Redis caching, and dbt transformations to deliver production-grade data products supporting analytics, reporting, and AI-ready feature engineering workflows.</li><br> <li><b></b>Designed SQL-first data workflows across PostgreSQL, Airflow, Power BI, and Excel, enabling reliable ingestion, transformation, validation, and self-service analytics for cross-functional stakeholders.</li></ul>',
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
			'<br>Worked in an enterprise data integration and analytics environment involving Oracle ERP, Oracle databases, Salesforce, flat files, Informatica PowerCenter, Amazon S3, Oracle ADW, Grafana, and SOAP-based integrations. Experienced in source analysis, ETL development, workflow monitoring, cloud-based staging, warehouse validation, API testing, and live reporting support. Used Oracle SQL Developer, PL/SQL Developer, Toad, Informatica Designer/Workflow Manager/Workflow Monitor, AWS Console, AWS CLI, Athena, Glue Data Catalog, CloudWatch, Postman, SoapUI, Salesforce Workbench, Excel, Jira, Confluence, Shell, and PuTTY to support end-to-end data movement, validation, troubleshooting, and reporting workflows.<br> <center><b>Highlights</b></center><br><ul><li><b></b>Engineered Oracle ERP, Salesforce, and file ingestion pipelines, reducing daily data latency by 45% by building Informatica PowerCenter workflows, optimizing mappings, and staging curated datasets in Amazon S3</li><br> <li><b></b>Improved warehouse load reliability to 99.8% by designing restartable PowerCenter sessions, validating source-to-target reconciliations in Oracle ADW, and automating failure triage through Workflow Monitor and CloudWatch.</li><br> <li><b></b>Accelerated ad hoc analytics by 40% by tuning Oracle SQL, refining ADW reporting views, and enabling Grafana dashboards for near-real-time KPI visibility across finance, sales, operations.</li><br><li><b></b>Reduced manual validation effort by 60% by creating SQL- and Excel-based reconciliation frameworks, standardizing file checks in S3, and enforcing consistent source-to-target data quality controls.</li><br><li><b></b>Increased pipeline throughput by 35% by optimizing PowerCenter transformations, parallelizing load sequences, and streamlining Oracle-to-S3-to-ADW data movement for large-volume batch integration workloads across domains.</li><br><li><b></b>Cut SOAP integration troubleshooting time by 50% by using Postman, SoapUI, Salesforce WSDL, and Workbench to validate payloads, diagnose schema mismatches, and resolve endpoint failures.</li><br><li><b></b>Improved production issue resolution SLA adherence by 30% by leveraging Jira, Confluence, Shell, PuTTY, and SQL diagnostics to investigate incidents, document root causes, and coordinate cross-team fixes.</li><br><li><b></b>Built robust enterprise data pipelines across Oracle ERP, Oracle DB, Salesforce, files, Informatica PowerCenter, Amazon S3, and Oracle ADW, enabling governed, analytics-ready datasets for downstream consumers.</li><br><li><b></b>Partnered with business and platform teams to translate source-system logic into scalable ETL designs, ensuring clean schema mappings, dependable warehouse loads, and trusted operational reporting outputs.</li><br><li><b></b>Strengthened observability across ingestion, staging, warehouse, and dashboard layers by combining Grafana, CloudWatch, SQL validation, and workflow monitoring to surface issues before downstream reporting impact.</li></ul>',
		contract: ContractType.FullTime,
		type: 'Data Analyst and Engineer',
		location: 'Chennai, India',
		period: {
			from: new Date(2020, 8, 3),
			to: new Date(2022, 9, 28)
		},
		skills: getSkills('SQL', 'PL/SQL', 'Informatica Powercentre', 'Java'),
		name: 'System Engineer',
		color: 'blue',
		links: [],
		logo: Assets.TCS,
		shortDescription: 'ETL Development and Workflow Automation'
	}
];

const ExperienceData = { title, items };

export default ExperienceData;
