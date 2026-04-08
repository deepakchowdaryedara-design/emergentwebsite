const serviceCaseStudies = {
  "artificial-intelligence": [
    { title: "AI-Powered Fraud Detection for Crypto Payments", client: "Speed", industry: "Fintech", desc: "Built a real-time fraud detection system using TensorFlow and Apache Kafka that identifies suspicious crypto transactions instantly, reducing fraud by 85%.", tech: ["TensorFlow", "Apache Kafka", "Docker", "Kubernetes"], highlight: "85% fraud reduction" },
    { title: "Smart Inventory Management System", client: "RetailMax", industry: "Retail", desc: "Developed predictive analytics models that forecast demand with 95% accuracy, reducing inventory waste by 30% and stockouts by 50%.", tech: ["Python", "Scikit-learn", "AWS", "PostgreSQL"], highlight: "30% waste reduction" },
    { title: "Predictive Maintenance for Manufacturing", client: "IndustrialAI", industry: "Manufacturing", desc: "Created sensor-data ML models that predict equipment failures 72 hours in advance, preventing costly unplanned downtime.", tech: ["PyTorch", "IoT Sensors", "Azure", "Time Series"], highlight: "72hr failure prediction" },
    { title: "Customer Churn Prediction Engine", client: "TelecomPro", industry: "Telecom", desc: "Built an ensemble ML model that predicts customer churn with 92% accuracy, enabling proactive retention campaigns.", tech: ["XGBoost", "Python", "Redis", "Airflow"], highlight: "92% prediction accuracy" },
  ],
  "generative-ai": [
    { title: "Enterprise Knowledge Copilot", client: "LegalTech Corp", industry: "Legal", desc: "Built a RAG-powered legal research assistant that searches 500K+ documents and provides cited answers in seconds.", tech: ["GPT-4o", "LangChain", "Pinecone", "React"], highlight: "500K+ docs indexed" },
    { title: "AI Content Generation Platform", client: "MediaFlow", industry: "Media", desc: "Created an AI-powered content pipeline that generates SEO-optimized articles, social posts, and email campaigns at scale.", tech: ["Claude 3.5", "Next.js", "PostgreSQL", "Redis"], highlight: "10x content output" },
    { title: "AI-Powered Code Review Tool", client: "DevStack", industry: "Technology", desc: "Built an automated code review system that catches bugs, security issues, and style violations before human review.", tech: ["GPT-4o", "LangGraph", "GitHub API", "Python"], highlight: "60% fewer bugs" },
    { title: "Multilingual Customer Support Bot", client: "GlobalServe", industry: "Customer Service", desc: "Deployed a GenAI support bot handling 50+ languages with 94% resolution rate, reducing human agent workload by 70%.", tech: ["GPT-4o", "RAG", "Node.js", "MongoDB"], highlight: "70% workload reduction" },
  ],
  "custom-software": [
    { title: "Enterprise ERP Modernization", client: "ManuCorp", industry: "Manufacturing", desc: "Migrated a 15-year-old ERP system to a cloud-native microservices architecture without any business disruption.", tech: ["React", "Node.js", "PostgreSQL", "Kubernetes"], highlight: "Zero downtime migration" },
    { title: "Real-time Trading Platform", client: "TradeVelocity", industry: "Fintech", desc: "Built a high-frequency trading platform processing 10K+ transactions per second with sub-millisecond latency.", tech: ["Go", "Redis", "Kafka", "AWS"], highlight: "10K+ TPS" },
    { title: "Healthcare Patient Portal", client: "MedConnect", industry: "Healthcare", desc: "Developed a HIPAA-compliant patient portal with telemedicine, appointment scheduling, and EHR integration.", tech: ["React", "Python", "FHIR", "Azure"], highlight: "HIPAA compliant" },
    { title: "Multi-tenant SaaS Platform", client: "CloudTools", industry: "SaaS", desc: "Architected a scalable multi-tenant platform serving 50K+ businesses with 99.99% uptime and white-label capabilities.", tech: ["Next.js", ".NET", "PostgreSQL", "AWS"], highlight: "99.99% uptime" },
  ],
  "mobile-apps": [
    { title: "AI-Powered Fitness Companion", client: "FitAI", industry: "Health & Fitness", desc: "Built a cross-platform fitness app with on-device pose detection, personalized workout plans, and real-time form correction.", tech: ["Flutter", "TensorFlow Lite", "Firebase", "Python"], highlight: "1M+ downloads" },
    { title: "Real Estate Virtual Tours App", client: "HomeView", industry: "Real Estate", desc: "Created an AR-powered property viewing app with 3D walkthroughs, AI staging, and mortgage calculator integration.", tech: ["React Native", "ARKit/ARCore", "Node.js", "AWS"], highlight: "40% faster closings" },
    { title: "On-Demand Delivery Platform", client: "QuickDrop", industry: "Logistics", desc: "Developed a full delivery ecosystem with customer app, driver app, and merchant dashboard with real-time tracking.", tech: ["Flutter", "Node.js", "MongoDB", "Google Maps"], highlight: "3 apps, 1 platform" },
    { title: "Banking Super App", client: "NeoBank", industry: "Banking", desc: "Built a feature-rich banking app with biometric auth, instant transfers, investment portfolios, and AI spending insights.", tech: ["Swift", "Kotlin", "Python", "PostgreSQL"], highlight: "500K+ active users" },
  ],
  "ai-agents": [
    { title: "Autonomous Sales Agent", client: "SalesForce Pro", industry: "Sales", desc: "Built an AI agent that autonomously researches prospects, crafts personalized outreach, and schedules meetings with 3x higher response rates.", tech: ["LangGraph", "GPT-4o", "Salesforce API", "Python"], highlight: "3x response rate" },
    { title: "IT Helpdesk Automation Agent", client: "TechSupport Co", industry: "IT Services", desc: "Deployed an AI agent that resolves 80% of IT tickets autonomously—password resets, software installs, access requests.", tech: ["AutoGen", "Claude", "ServiceNow API", "Python"], highlight: "80% auto-resolution" },
    { title: "Supply Chain Orchestrator", client: "LogiChain", industry: "Logistics", desc: "Created a multi-agent system that monitors inventory, predicts demand, and automatically places orders across 200+ suppliers.", tech: ["CrewAI", "GPT-4o", "Kafka", "PostgreSQL"], highlight: "200+ suppliers managed" },
    { title: "Compliance Monitoring Agent", client: "RegTech", industry: "Financial Services", desc: "Built an agent that continuously monitors regulatory changes, assesses impact, and generates compliance action plans automatically.", tech: ["LangChain", "Claude", "Elasticsearch", "Python"], highlight: "24/7 monitoring" },
  ],
  "llm-development": [
    { title: "Domain-Specific Medical LLM", client: "HealthAI Labs", industry: "Healthcare", desc: "Fine-tuned a medical LLM on 2M+ clinical documents that assists physicians with diagnosis suggestions and treatment plans.", tech: ["Llama 3", "PyTorch", "RLHF", "Azure"], highlight: "2M+ docs trained" },
    { title: "Legal Document Analysis LLM", client: "LawTech", industry: "Legal", desc: "Built a custom LLM for contract review that identifies risks, missing clauses, and compliance issues with 97% accuracy.", tech: ["GPT-4o Fine-tune", "LangChain", "Pinecone", "AWS"], highlight: "97% accuracy" },
    { title: "Multilingual Customer Service LLM", client: "GlobalCom", industry: "Telecom", desc: "Developed a fine-tuned LLM supporting 30+ languages for customer service, reducing average handle time by 45%.", tech: ["Mistral", "LoRA", "vLLM", "Kubernetes"], highlight: "30+ languages" },
    { title: "Financial Report Generator LLM", client: "FinanceAI", industry: "Finance", desc: "Created a RAG-powered LLM that generates financial reports, risk assessments, and market analyses from raw data.", tech: ["GPT-4o", "RAG", "Snowflake", "Python"], highlight: "90% time saved" },
  ],
  "devops": [
    { title: "Multi-Cloud Infrastructure Automation", client: "CloudScale", industry: "Technology", desc: "Automated infrastructure across AWS, GCP, and Azure using Terraform, reducing provisioning time from days to minutes.", tech: ["Terraform", "Kubernetes", "GitHub Actions", "Ansible"], highlight: "Days to minutes" },
    { title: "Zero-Downtime Migration to K8s", client: "eComGiant", industry: "E-commerce", desc: "Migrated 200+ microservices to Kubernetes with zero downtime during Black Friday peak traffic.", tech: ["Kubernetes", "Helm", "Istio", "ArgoCD"], highlight: "Zero downtime" },
    { title: "AIOps Platform for Monitoring", client: "SysAdmin Pro", industry: "IT Operations", desc: "Built an AIOps platform that predicts incidents 30 minutes before they happen and auto-remediates common issues.", tech: ["Prometheus", "Grafana", "ML Pipeline", "PagerDuty"], highlight: "30min early warning" },
    { title: "Secure CI/CD for Healthcare", client: "HealthTech", industry: "Healthcare", desc: "Implemented HIPAA-compliant CI/CD pipelines with automated security scanning, reducing deployment cycle from weeks to hours.", tech: ["GitLab CI", "SonarQube", "Trivy", "AWS ECS"], highlight: "Weeks to hours" },
  ],
  "data-engineering": [
    { title: "Real-time Analytics Platform", client: "AdTech Corp", industry: "Advertising", desc: "Built a streaming data platform processing 10B+ events daily for real-time ad targeting and attribution analytics.", tech: ["Kafka", "Flink", "Snowflake", "Airflow"], highlight: "10B+ events/day" },
    { title: "Healthcare Data Lake", client: "HealthData", industry: "Healthcare", desc: "Designed a HIPAA-compliant data lake unifying EHR, claims, and IoT data for population health analytics.", tech: ["Delta Lake", "Spark", "dbt", "AWS"], highlight: "HIPAA compliant" },
    { title: "Customer 360 Data Platform", client: "RetailPro", industry: "Retail", desc: "Built a unified customer data platform integrating 15+ data sources for personalized marketing and analytics.", tech: ["Snowflake", "Fivetran", "dbt", "Tableau"], highlight: "15+ sources unified" },
    { title: "IoT Sensor Data Pipeline", client: "SmartFactory", industry: "Manufacturing", desc: "Created a real-time pipeline processing 500K+ sensor readings per second for predictive maintenance dashboards.", tech: ["Kafka", "Spark Streaming", "InfluxDB", "Grafana"], highlight: "500K reads/sec" },
  ],
};

export default serviceCaseStudies;
