/**
 * CHETAN KUMAR N K - PORTFOLIO DATA
 * Source of Truth: Verified Resume & Public Profile
 * Strictly verified without hallucinations.
 */

const PORTFOLIO_DATA = {
  personal: {
    name: "CHETAN KUMAR N K",
    title: "Information Science & Engineering Student",
    subtitles: ["AI & Machine Learning Engineer", "Generative AI & RAG Specialist", "Data Analytics & Intelligent Systems", "AI Workflow Automation Engineer"],
    headline: "Building intelligent systems that turn ideas into reality.",
    summary: "Information Science and Engineering student passionate about Artificial Intelligence, Machine Learning, and Data Science. Experienced in developing machine learning models, Generative AI applications, RAG systems, and AI workflow automations with Python, SQL, TensorFlow, Scikit-learn, and LangChain.",
    email: "chetannaikchetan8@gmail.com",
    phone: "+91 8073110116",
    location: "Shivamogga, Karnataka, India",
    education: {
      institution: "Jawaharlal Nehru National College of Engineering (JNNCE)",
      degree: "Bachelor of Engineering in Information Science & Engineering",
      period: "Jan 2023 – Sep 2027",
      cgpa: "7.57 / 10",
      puc: "92.00%",
      sslc: "91.48%",
      location: "Shivamogga, India"
    },
    links: {
      email: "mailto:chetannaikchetan8@gmail.com",
      linkedin: "https://www.linkedin.com/in/chetankumarnk/",
      github: "https://github.com/chetankumar36",
      credly: "https://www.credly.com/users/chetan-kumar-n-k",
      resumePdf: "Chetan_Kumar_N_K_resume.pdf"
    }
  },

  skills: [
    {
      category: "AI / ML & Generative AI",
      icon: "brain-circuit",
      description: "Core machine learning, deep learning architectures, RAG systems & agentic workflows",
      items: [
        { name: "Machine Learning", level: "Advanced" },
        { name: "Deep Learning", level: "Advanced" },
        { name: "Generative AI", level: "Advanced" },
        { name: "RAG Pipelines", level: "Advanced" },
        { name: "LLMs & Prompt Eng", level: "Advanced" },
        { name: "Computer Vision", level: "Intermediate" },
        { name: "NLP", level: "Intermediate" },
        { name: "LangChain", level: "Advanced" },
        { name: "TensorFlow", level: "Intermediate" },
        { name: "Scikit-Learn", level: "Advanced" },
        { name: "OpenCV", level: "Intermediate" },
        { name: "Agentic AI", level: "Intermediate" }
      ]
    },
    {
      category: "Languages & Core CS",
      icon: "code-xml",
      description: "Strong computer science fundamentals, OOP paradigms and systems knowledge",
      items: [
        { name: "Python", level: "Expert" },
        { name: "Java", level: "Proficient" },
        { name: "SQL", level: "Proficient" },
        { name: "Object-Oriented Programming (OOP)", level: "Advanced" },
        { name: "Operating Systems", level: "Proficient" },
        { name: "Computer Networks", level: "Proficient" },
        { name: "Data Structures & Algorithms", level: "Proficient" }
      ]
    },
    {
      category: "Backend & Automation",
      icon: "workflow",
      description: "High-performance API servers, protocol design and autonomous orchestrations",
      items: [
        { name: "FastAPI", level: "Advanced" },
        { name: "REST APIs", level: "Advanced" },
        { name: "n8n Automation", level: "Advanced" },
        { name: "Model Context Protocol (MCP)", level: "Advanced" },
        { name: "MCP Servers", level: "Advanced" },
        { name: "Workflow Orchestration", level: "Advanced" },
        { name: "API Integrations", level: "Advanced" }
      ]
    },
    {
      category: "Data & Analytics",
      icon: "bar-chart-3",
      description: "End-to-end data processing, statistical modeling and BI dashboards",
      items: [
        { name: "Pandas & NumPy", level: "Advanced" },
        { name: "Exploratory Data Analysis (EDA)", level: "Advanced" },
        { name: "Data Cleaning & Preprocessing", level: "Advanced" },
        { name: "Power BI", level: "Proficient" },
        { name: "Tableau", level: "Proficient" },
        { name: "MySQL", level: "Proficient" },
        { name: "Matplotlib & Seaborn", level: "Advanced" },
        { name: "Excel Advanced Analytics", level: "Proficient" }
      ]
    },
    {
      category: "DevOps & Tools",
      icon: "cpu",
      description: "Development environments, rapid UI prototypes and containerization",
      items: [
        { name: "Docker", level: "Intermediate" },
        { name: "Kubernetes", level: "Foundational" },
        { name: "Git & GitHub", level: "Advanced" },
        { name: "Streamlit", level: "Advanced" },
        { name: "Gradio", level: "Proficient" },
        { name: "VS Code", level: "Advanced" },
        { name: "Google Colab", level: "Advanced" },
        { name: "Raspberry Pi & IoT", level: "Advanced" }
      ]
    }
  ],

  projects: [
    {
      id: "smart-robo-nurse",
      number: "01",
      title: "Smart Robo Nurse — Patient Monitoring & Medication Assistance",
      tagline: "Raspberry Pi-powered autonomous healthcare robotic assistant for clinical environments",
      category: "IoT & Intelligent Healthcare",
      status: "Ongoing Major Project",
      technologies: ["Raspberry Pi", "IoT Sensors", "Python", "Cloud Monitoring", "Hardware Interfacing", "Real-Time Telemetry", "Automated Dispenser"],
      github: "https://github.com/chetankumar36",
      demo: null,
      summary: "A Raspberry Pi-based robotic healthcare assistant designed for multi-patient hospital environments, combining scheduled medication dispensing with continuous patient vital-sign monitoring and instant anomaly alerts.",
      problem: "In high-pressure hospital wards and care centers, nurses are overburdened with routine vitals checks and time-critical medication delivery across numerous patients, leading to caregiver burnout and potential missed doses.",
      solution: "Engineered an IoT-enabled robotic assistant with an automated pill dispensing mechanism and non-invasive vital-sign sensor array that streams real-time biometric telemetry to cloud dashboards and notifies clinical staff when vital thresholds cross safety limits.",
      architecture: [
        { step: "Patient Vital Sensors", desc: "Pulse, SpO2, and temperature sensors stream continuous physiological telemetry" },
        { step: "Raspberry Pi Edge Controller", desc: "Local edge processing verifies readings and triggers automated medication dispensing" },
        { step: "Cloud Telemetry Engine", desc: "Synchronizes patient status with a secure central caregiver dashboard" },
        { step: "Threshold Alert System", desc: "Instantly dispatches critical alerts to doctors, nurses, and guardians upon anomalies" }
      ],
      contributions: [
        "Architected edge hardware-software interface connecting sensory probes with Raspberry Pi GPIOs",
        "Developed scheduling logic and stepper-motor control algorithms for precise medication portioning",
        "Implemented real-time WebSocket telemetry pipeline transmitting metrics to remote medical staff",
        "Built dynamic safety thresholds triggering urgent audio-visual and cloud notifications"
      ],
      highlights: [
        "Multi-patient scheduled dispensing mechanism",
        "Continuous biometric telemetry streaming",
        "Instant multi-tier caregiver alert notifications",
        "Integrated edge-cloud fail-safe architecture"
      ]
    },
    {
      id: "videomind-ai",
      number: "02",
      title: "VideoMind AI — Video & Meeting Intelligence Assistant",
      tagline: "Context-grounded RAG assistant converting long-form multimedia into actionable insights",
      category: "Generative AI & RAG",
      status: "Completed & Open Source",
      technologies: ["Python", "RAG", "LLM", "Whisper", "LangChain", "Mistral AI", "HuggingFace", "ChromaDB", "Streamlit"],
      github: "https://github.com/chetankumar36/VideoMind-AI",
      demo: "https://github.com/chetankumar36/VideoMind-AI",
      summary: "AI video and meeting intelligence assistant that converts YouTube URLs and local audio/video into searchable transcripts, summaries, action items, key decisions, and multilingual insights using context-grounded RAG.",
      problem: "Extracting actionable takeaways, decisions, and specific answers from hours of recorded lectures, webinars, and team meetings is tedious, unindexed, and time-consuming.",
      solution: "Engineered an end-to-end multimodal intelligence tool combining OpenAI Whisper for high-precision transcription, LangChain for chunking & semantic orchestration, HuggingFace embeddings in ChromaDB, and Mistral AI LLM for context-grounded Q&A.",
      architecture: [
        { step: "Input Video / Audio", desc: "Ingests YouTube URLs or local media files into the audio extraction pipeline" },
        { step: "Whisper Transcription", desc: "Performs timestamped speech-to-text conversion across multilingual audio" },
        { step: "Semantic Chunking", desc: "Splits transcripts into context-preserving text chunks with metadata" },
        { step: "HuggingFace Embeddings", desc: "Generates dense vector embeddings capturing semantic nuances" },
        { step: "ChromaDB Vector Store", desc: "Indexes embeddings for sub-millisecond similarity search" },
        { step: "Mistral AI Synthesis", desc: "Generates structured summaries, action items, and answers grounded in context" }
      ],
      contributions: [
        "Built seamless video/audio ingestion pipeline supporting both YouTube streaming and local upload",
        "Integrated Whisper speech recognition engine with timestamp synchronization",
        "Designed vector retrieval pipeline with ChromaDB and HuggingFace MiniLM embeddings",
        "Constructed intuitive interactive UI in Streamlit featuring conversational Q&A and exportable reports"
      ],
      highlights: [
        "Zero-hallucination grounded RAG over long-duration video transcripts",
        "Automated extraction of action items, key takeaways & decisions",
        "Multilingual transcription and summarization support",
        "Full conversational context retention with ChromaDB vector search"
      ]
    },
    {
      id: "ai-email-assistant",
      number: "03",
      title: "AI Email Assistant — n8n Workflow Automation",
      tagline: "Intelligent autonomous email triage and workflow orchestration system",
      category: "AI Automation & Backend",
      status: "Completed & Open Source",
      technologies: ["n8n", "AI Automation", "Email Automation", "Workflow Orchestration", "API Integration", "OpenAI / LLM", "JSON"],
      github: "https://github.com/chetankumar36/AI_Email_assistant_using_n8n",
      demo: "https://github.com/chetankumar36/AI_Email_assistant_using_n8n",
      summary: "An autonomous AI email assistant built with n8n to automate repetitive inbox processing, classify incoming messages by intent/urgency, synthesize tailored replies, and route tasks to connected tools via APIs.",
      problem: "Professionals and teams lose hours daily sorting through repetitive emails, drafting routine replies, and manually forwarding tasks across disparate business tools.",
      solution: "Architected a low-code/pro-code automation workflow in n8n integrating AI sentiment and intent analysis nodes, dynamic template generation, and multi-service API triggers to handle incoming communications autonomously.",
      architecture: [
        { step: "Webhook / IMAP Trigger", desc: "Detects incoming emails in real-time across connected mailbox providers" },
        { step: "AI Intent & Sentiment Classifier", desc: "Parses email body to categorize inquiries, urgency, and required actions" },
        { step: "Context Extraction & Draft Engine", desc: "Fetches relevant context and formulates personalized draft responses" },
        { step: "API Service Orchestrator", desc: "Dispatches updates to calendar, task managers, and sends scheduled replies" }
      ],
      contributions: [
        "Constructed modular n8n workflow pipelines with robust error handling and fallback paths",
        "Created prompt chains for intent categorization and high-fidelity contextual response drafting",
        "Implemented secure OAuth2 API integrations with Google Workspace / Outlook services",
        "Reduced manual email processing overhead by eliminating repetitive status inquiries"
      ],
      highlights: [
        "Trigger-based autonomous email orchestration",
        "Intent classification and automated draft synthesis",
        "Multi-service webhook and API integration",
        "Zero-code maintainability with enterprise-grade modularity"
      ]
    },
    {
      id: "ai-assistive-wearable",
      number: "04",
      title: "AI Assistive Wearable for Visually Impaired (AID1)",
      tagline: "Computer vision wearable prototype for real-time obstacle and object awareness",
      category: "Computer Vision & Edge AI",
      status: "Funded Prototype (NewGen IEDC ₹10,000)",
      technologies: ["Python", "YOLO", "Computer Vision", "Raspberry Pi", "IoT", "OpenCV", "Edge Computing", "Haptic Feedback"],
      github: "https://github.com/chetankumar36",
      demo: null,
      summary: "A Raspberry Pi-based wearable prototype equipped with an ultra-compact camera and custom-trained YOLO computer vision models to provide real-time spatial obstacle and object awareness for visually impaired users. Funded by NewGen IEDC grant.",
      problem: "Visually impaired individuals face daily navigation hazards from overhead obstacles, dynamic pedestrians, and low-contrast objects that traditional white canes cannot detect.",
      solution: "Developed an edge-computing wearable device running lightweight YOLO object detection models on a Raspberry Pi camera stream, outputting spatial spatial-audio and haptic cues to guide the wearer safely.",
      architecture: [
        { step: "Miniature Camera Stream", desc: "Captures live egocentric video feed of the user's forward environment" },
        { step: "Custom YOLO Edge Detector", desc: "Detects obstacles, doors, vehicles, and pedestrians with low latency" },
        { step: "Spatial Depth & Distance Calculation", desc: "Estimates proximity and trajectory of oncoming obstacles in real time" },
        { step: "Audio / Haptic Feedback", desc: "Delivers non-intrusive directional guidance through spatial sound and vibrations" }
      ],
      contributions: [
        "Trained and quantized custom YOLO object detection models optimized for Raspberry Pi compute limits",
        "Designed edge inference loop maintaining high frame throughput using OpenCV optimizations",
        "Integrated directional tactile and speech feedback modules for intuitive user perception",
        "Successfully pitched the technology to secure a ₹10,000 NewGen IEDC research and prototype grant"
      ],
      highlights: [
        "Secured ₹10,000 NewGen IEDC prototyping grant",
        "Real-time edge object detection with custom YOLO models",
        "Ultra-lightweight wearable hardware form factor",
        "Intuitive audio-haptic navigational feedback"
      ]
    },
    {
      id: "ai-skin-detection-chatbot",
      number: "05",
      title: "AI Skin Detection & Health Chatbot",
      tagline: "Multimodal computer vision and conversational dermatology assistant",
      category: "Computer Vision & Medical AI",
      status: "GitHub Project",
      technologies: ["Python", "Computer Vision", "Deep Learning", "NLP / Chatbot", "OpenCV", "TensorFlow", "FastAPI"],
      github: "https://github.com/chetankumar36/AI-Skin-Detection-Chatbot",
      demo: null,
      summary: "An intelligent healthcare application combining computer vision classification with an interactive conversational chatbot to assist users with preliminary skin condition identification and general dermatological triage guidance.",
      problem: "Patients often delay consulting specialists for skin anomalies due to lack of immediate preliminary evaluation tools.",
      solution: "Engineered a dual-module system integrating deep learning image recognition on dermatological image samples with an empathetic conversational agent providing relevant care context.",
      architecture: [
        { step: "Image & Query Input", desc: "Ingests skin lesion photographs and user-described symptoms" },
        { step: "Deep Vision Feature Extractor", desc: "Applies CNN model to detect visual patterns, textures, and anomalies" },
        { step: "Condition Classifier", desc: "Predicts probable dermatological conditions with confidence scores" },
        { step: "Conversational Advisory", desc: "Generates tailored conversational responses and recommended next steps" }
      ],
      contributions: [
        "Constructed deep vision inference pipeline for skin lesion image processing",
        "Integrated conversational NLP dialogue flows for symptom gathering",
        "Implemented user-friendly interactive responses with safety disclaimers"
      ],
      highlights: [
        "Multimodal vision and conversational intelligence",
        "Preliminary dermatological anomaly classification",
        "Intuitive conversational health advisory",
        "Open-source modular architecture"
      ]
    },
    {
      id: "object-recognition-resnet50",
      number: "06",
      title: "Object Recognition using ResNet50 (CIFAR-10)",
      tagline: "Deep Residual Learning architecture for multi-class visual recognition",
      category: "Deep Learning & Computer Vision",
      status: "GitHub Project",
      technologies: ["Python", "PyTorch / TensorFlow", "ResNet50", "CIFAR-10", "Computer Vision", "Jupyter Notebook", "Data Augmentation"],
      github: "https://github.com/chetankumar36/object_recognition_using_Resnet50_cifar10",
      demo: null,
      summary: "A deep learning visual classification model leveraging the 50-layer ResNet architecture with residual skip connections to recognize and classify natural objects across 10 distinct categories in the CIFAR-10 dataset.",
      problem: "Deep convolutional networks suffer from vanishing and exploding gradients when scaling depth, limiting classification accuracy on complex object recognition tasks.",
      solution: "Implemented ResNet50 with identity shortcut mappings, batch normalization, and transfer learning, enabling effective feature propagation through deep layers and achieving high generalization accuracy.",
      architecture: [
        { step: "CIFAR-10 Dataset Stream", desc: "Ingests 60,000 32x32 color images across 10 object classes" },
        { step: "Data Augmentation Pipeline", desc: "Applies random cropping, horizontal flipping, and normalization" },
        { step: "ResNet50 Residual Backbone", desc: "Extracts hierarchical spatial representations through bottleneck residual blocks" },
        { step: "Global Pooling & Classification", desc: "Computes softmax probability distributions across target classes" }
      ],
      contributions: [
        "Constructed deep convolutional pipeline with customized residual blocks and skip connections",
        "Implemented training optimizations including learning rate scheduling and Adam optimizer",
        "Evaluated classification confusion matrix and top-1/top-5 accuracy across test batches"
      ],
      highlights: [
        "Deep 50-layer residual architecture",
        "Effective mitigation of vanishing gradient degradation",
        "High-accuracy visual feature representation",
        "Complete reproducible Jupyter Notebook workflow"
      ]
    },
    {
      id: "breast-cancer-classification",
      number: "07",
      title: "Breast Cancer Diagnostic Classification System",
      tagline: "Predictive medical machine learning model for tumor malignancy detection",
      category: "Machine Learning & Healthcare AI",
      status: "GitHub Project",
      technologies: ["Python", "Machine Learning", "Scikit-Learn", "Logistic Regression", "EDA", "Jupyter Notebook", "Pandas"],
      github: "https://github.com/chetankumar36/Breast_cancer_classification_system",
      demo: null,
      summary: "A machine learning diagnostic classification system that analyzes cytological features of cell nuclei from biopsy datasets to accurately predict benign vs malignant breast masses.",
      problem: "Manual biopsy diagnosis requires rigorous specialist inspection and is prone to diagnostic latency in high-volume pathology labs.",
      solution: "Engineered a predictive classifier performing standard scaling, feature correlation analysis, and statistical decision boundaries to classify tumors with high sensitivity and minimal false negatives.",
      architecture: [
        { step: "Biopsy Feature Matrix", desc: "Ingests nuclear radius, texture, perimeter, area, and smoothness metrics" },
        { step: "Data Preprocessing & Scaling", desc: "Handles missing values and standardizes continuous numerical features" },
        { step: "Model Training & Tuning", desc: "Trains predictive classification models with cross-validation" },
        { step: "Diagnostic Inference", desc: "Outputs binary diagnostic classification (Malignant / Benign)" }
      ],
      contributions: [
        "Conducted thorough exploratory data analysis and feature correlation heatmaps",
        "Built robust classification pipeline achieving high sensitivity and ROC-AUC score",
        "Evaluated precision-recall curves to optimize clinical decision thresholds"
      ],
      highlights: [
        "High-precision diagnostic binary classification",
        "Comprehensive statistical feature analysis",
        "Optimized to minimize diagnostic false negatives",
        "Clean, documented Jupyter Notebook implementation"
      ]
    },
    {
      id: "wine-quality-prediction",
      number: "08",
      title: "Wine Quality Predictive Modeling System",
      tagline: "Multivariate regression and classification for physicochemical quality scoring",
      category: "Machine Learning & Analytics",
      status: "GitHub Project",
      technologies: ["Python", "Random Forest", "Scikit-Learn", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"],
      github: "https://github.com/chetankumar36/Wine_Quality_Predictive_System",
      demo: null,
      summary: "An end-to-end machine learning system that predicts wine quality ratings by analyzing physicochemical properties including acidity, residual sugar, chlorides, and alcohol content.",
      problem: "Subjective wine sensory evaluation is inconsistent and difficult to standardize across production batches without objective chemical modeling.",
      solution: "Developed an ensemble learning predictive model using Random Forest and feature ranking algorithms to establish clear mathematical relationships between chemical attributes and quality scores.",
      architecture: [
        { step: "Physicochemical Data Feed", desc: "Parses fixed acidity, volatile acidity, citric acid, pH, and alcohol metrics" },
        { step: "EDA & Outlier Treatment", desc: "Identifies feature skewness and cleans anomalous sensor observations" },
        { step: "Ensemble Model Training", desc: "Trains Random Forest regressors and classifiers on scaled attributes" },
        { step: "Quality Score Evaluation", desc: "Generates precise quality ratings and feature importance rankings" }
      ],
      contributions: [
        "Analyzed key chemical drivers influencing quality scores using feature importance trees",
        "Implemented hyperparameter tuning to boost cross-validation predictive accuracy",
        "Created rich visualization charts illustrating correlation between alcohol/acidity and quality"
      ],
      highlights: [
        "Ensemble Random Forest predictive modeling",
        "In-depth correlation and distribution analysis",
        "Objective physicochemical scoring engine",
        "Full reproducible data pipeline"
      ]
    },
    {
      id: "rock-mine-prediction",
      number: "09",
      title: "Rock vs Mine Underwater Sonar Prediction",
      tagline: "Supervised classification of underwater sonar signals across 60 spectral bands",
      category: "Machine Learning & Signal AI",
      status: "GitHub Project",
      technologies: ["Python", "Machine Learning", "Logistic Regression", "Signal Processing", "Scikit-Learn", "Jupyter Notebook"],
      github: "https://github.com/chetankumar36/Rock_Mine_Prediction_System",
      demo: null,
      summary: "A machine learning signal classification system that processes 60-frequency sonar reflection returns to accurately discriminate between underwater rock obstacles and metal naval mines.",
      problem: "Submarine navigation systems face high false-alarm rates when attempting to differentiate natural rock formations from hazardous metal mines using acoustic reflection signals.",
      solution: "Architected a supervised classification pipeline that normalizes multi-angle frequency responses and trains predictive algorithms to identify metal cylinder signatures with high statistical confidence.",
      architecture: [
        { step: "60-Band Sonar Signals", desc: "Captures acoustic energy returns bouncing off underwater objects at diverse angles" },
        { step: "Signal Normalization", desc: "Scales multi-frequency amplitudes across consistent numerical ranges" },
        { step: "Supervised Model Training", desc: "Trains classification algorithms to separate rock vs mine feature spaces" },
        { step: "Target Identification", desc: "Outputs binary prediction label (M for Mine, R for Rock)" }
      ],
      contributions: [
        "Implemented data transformation and train-test splits on acoustic sonar datasets",
        "Trained and evaluated Logistic Regression models with cross-validation",
        "Demonstrated real-time inference on unseen acoustic sample inputs"
      ],
      highlights: [
        "60-channel acoustic sonar signal classification",
        "High accuracy on unseen test samples",
        "Fast sub-millisecond classification inference",
        "Structured Jupyter Notebook workflow"
      ]
    },
    {
      id: "retail-sales-prediction",
      number: "10",
      title: "Retail Superstore Sales Analysis & Prediction",
      tagline: "Business intelligence, profit diagnostics & predictive revenue forecasting",
      category: "Data Science & Predictive Analytics",
      status: "GitHub Project",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-Learn", "Jupyter Notebook", "EDA"],
      github: "https://github.com/chetankumar36/Retail-Superstore-Sales-Analysis-Sales-Prediction-using-Python",
      demo: null,
      summary: "A comprehensive data science and analytics investigation on enterprise retail superstore transaction datasets to diagnose profit margins, detect revenue leaks, and build predictive sales models.",
      problem: "Retail enterprises lose margin from undiscovered discounting inefficiencies, regional shipping overhead, and poor demand forecasting.",
      solution: "Performed rigorous exploratory data analysis, regional profit segmentation, customer category analytics, and regression-based sales prediction models to deliver actionable business insights.",
      architecture: [
        { step: "Transaction Log Ingestion", desc: "Loads multi-year transactional records spanning customer segments and regions" },
        { step: "Data Cleaning & Preprocessing", desc: "Cleans categorical variables, formats dates, and handles financial metrics" },
        { step: "Exploratory Analytics & Visualization", desc: "Maps profit margins across states, categories, and discount thresholds" },
        { step: "Predictive Sales Modeling", desc: "Builds regression pipelines to forecast product demand and future revenue" }
      ],
      contributions: [
        "Identified loss-making product categories and over-discounted product lines",
        "Engineered visual dashboards with Seaborn detailing state-wise profit distributions",
        "Built predictive models evaluating sales volume trends over time"
      ],
      highlights: [
        "Comprehensive retail enterprise exploratory data analysis",
        "Data-driven profit margin optimization insights",
        "Actionable consumer segment behavior findings",
        "Complete analytics Jupyter Notebook"
      ]
    },
    {
      id: "customer-purchase-behavior",
      number: "11",
      title: "Customer Purchase Behavior & Segmentation Analysis",
      tagline: "Unsupervised clustering and RFM behavioral cohort modeling",
      category: "Data Analytics & Machine Learning",
      status: "GitHub Project",
      technologies: ["Python", "K-Means Clustering", "RFM Analysis", "Scikit-Learn", "Pandas", "Matplotlib", "Jupyter Notebook"],
      github: "https://github.com/chetankumar36/Customer_Purchase_Behavior_Analysis",
      demo: null,
      summary: "An analytics and machine learning system modeling customer purchasing patterns through RFM (Recency, Frequency, Monetary) feature engineering and K-Means unsupervised clustering to optimize marketing retention strategies.",
      problem: "One-size-fits-all marketing campaigns lead to high customer churn and wasted promotional spend by ignoring natural consumer lifecycle stages.",
      solution: "Segmented customer cohorts using mathematical clustering on normalized transactional behavior, distinguishing high-value champions from at-risk accounts.",
      architecture: [
        { step: "Customer Purchase Records", desc: "Extracts individual order histories, purchase frequencies, and spend totals" },
        { step: "RFM Metric Formulation", desc: "Calculates Recency, Frequency, and Monetary scores for every customer" },
        { step: "K-Means Cluster Optimization", desc: "Uses elbow method and silhouette scores to partition optimal clusters" },
        { step: "Behavioral Persona Profiling", desc: "Maps strategic marketing recommendations to each behavioral cluster" }
      ],
      contributions: [
        "Formulated RFM mathematical scoring models on commercial transaction sets",
        "Tuned K-Means clustering hyperparameters for clean cluster separation",
        "Generated visual 2D/3D cluster plots demonstrating customer persona separation"
      ],
      highlights: [
        "Unsupervised K-Means behavioral clustering",
        "Mathematical RFM customer segmentation",
        "Targeted customer retention insights",
        "Clean, modular Python implementation"
      ]
    },
    {
      id: "ai-product-intelligence",
      number: "12",
      title: "AI Product Intelligence System",
      tagline: "Market intelligence, customer feedback extraction and product analytics",
      category: "AI & Data Analytics",
      status: "GitHub Project",
      technologies: ["Python", "NLP", "Sentiment Analysis", "Data Analytics", "Scikit-Learn", "Pandas"],
      github: "https://github.com/chetankumar36/AI-Product-Intelligence-System",
      demo: null,
      summary: "An intelligent product analytics system that aggregates customer feedback, extracts key sentiment drivers, and synthesizes competitive product intelligence for eCommerce and SaaS platforms.",
      problem: "Teams struggle to parse thousands of unstructured product reviews to isolate specific feature complaints and user delight factors.",
      solution: "Constructed an NLP-driven intelligence pipeline categorizing product sentiment, ranking feature mentions, and producing executive summary metrics.",
      architecture: [
        { step: "Product Review Stream", desc: "Ingests raw text reviews, star ratings, and metadata across product lines" },
        { step: "NLP Text Preprocessing", desc: "Tokenizes, cleans, and vectorizes customer feedback statements" },
        { step: "Sentiment & Aspect Extraction", desc: "Classifies sentiment polarities and links them to product features" },
        { step: "Intelligence Dashboard", desc: "Renders consolidated product strength and improvement heatmaps" }
      ],
      contributions: [
        "Designed NLP feature extraction pipelines for customer sentiment scoring",
        "Created aggregated metrics identifying highest-priority product improvement areas",
        "Built modular Python scripts for batch processing of product feedback data"
      ],
      highlights: [
        "Aspect-based customer sentiment extraction",
        "Automated feature strength & flaw identification",
        "Scalable data processing pipeline",
        "Open-source repository"
      ]
    }
  ],

  experience: [
    {
      role: "Campus Crew Member",
      organization: "HackerRank",
      location: "Remote / Campus",
      period: "Jun 2026 – Present",
      type: "Student Leadership & Engagement",
      description: "Supporting student engagement, competitive coding initiatives, and student participation in programming, problem-solving, and algorithmic challenges across the campus community.",
      bulletPoints: [
        "Advocate competitive programming and structured problem-solving practices across student batches",
        "Facilitate campus coding contests and coordinate technical prep sessions for technical interviews",
        "Collaborate with peer leaders to foster an active development and algorithm culture on campus"
      ]
    },
    {
      role: "Data Analytics Intern",
      organization: "Oasis Infobyte",
      location: "Remote, India",
      period: "Mar 2026 – May 2026",
      type: "Internship",
      description: "Conducted data cleaning, exploratory data analysis (EDA), statistical evaluation, customer segmentation, and sentiment-analysis workflows on business datasets using Python and SQL.",
      bulletPoints: [
        "Performed rigorous data cleaning, outlier treatment, and feature preprocessing on enterprise datasets",
        "Executed statistical exploratory data analysis (EDA) and sentiment analysis workflows using Pandas and NumPy",
        "Engineered customer segmentation models and visualized actionable business insights via Matplotlib and Seaborn",
        "Formulated SQL queries for database aggregation and structured report generation"
      ]
    },
    {
      role: "Active Member",
      organization: "IEEE Computer Society Student Chapter, JNNCE",
      location: "Shivamogga, India",
      period: "Oct 2025 – Present",
      type: "Technical Community & Operations",
      description: "Contributed to technical events and coding activities; supported participant coordination and technical operations for the National-Level AI Hackathon YUGMA TECHFEST 2.0 (2026).",
      bulletPoints: [
        "Supported technical operations and participant mentoring during YUGMA TECHFEST 2.0 National Hackathon",
        "Organized hands-on technical workshops on AI, software development, and modern engineering tools",
        "Engaged with student engineers to facilitate technical growth and collaborative innovation"
      ]
    }
  ],

  achievements: [
    {
      title: "1st Place — Ideathon",
      organization: "Malnad College of Engineering (MCE), Hassan",
      date: "2026",
      badge: "₹5,000 Cash Prize",
      category: "Innovation & Pitching",
      description: "Secured First Place and a ₹5,000 cash prize for presenting and pitching an innovative, high-impact technical solution to an expert jury panel."
    },
    {
      title: "1st Place — UI/UX Design Competition",
      organization: "College Technical Fest",
      date: "2026",
      badge: "Winner",
      category: "Design & Product",
      description: "Awarded 1st Place for crafting an intuitive, user-centric interface and product wireframe adhering to modern design systems and usability heuristics."
    },
    {
      title: "Runner-up — AURA 1.0 National-Level UI/UX Design Competition",
      organization: "Byte Brigade Club",
      date: "2026",
      badge: "National Runner-up",
      category: "UI/UX & Product",
      description: "Recognized as National Runner-up in AURA 1.0 for exceptional product prototyping, user experience mapping, and high-fidelity interface design."
    },
    {
      title: "Runner-up — ISE Branch Hackathon",
      organization: "JNNCE, Shivamogga",
      date: "2026",
      badge: "Department Runner-up",
      category: "Hackathon",
      description: "Competed in real-world application building challenges against top branch teams, creating working software solutions under tight time constraints."
    },
    {
      title: "NewGen IEDC Grant Recipient (₹10,000)",
      organization: "NewGen IEDC",
      date: "2026",
      badge: "₹10,000 Grant",
      category: "Research & Innovation",
      description: "Awarded a ₹10,000 research and prototyping grant for developing the AID1 AI-Assistive Wearable device for visually impaired users."
    },
    {
      title: "Selected for 36-Hour Anveshana Hack For Hire 2026",
      organization: "PESITM, Shivamogga",
      date: "2026",
      badge: "Industry Hackathon",
      category: "Startup Collaboration",
      description: "Handpicked to collaborate alongside industry startup engineering teams to build solutions for real-world enterprise problem statements."
    },
    {
      title: "Technical Operations Coordinator — YUGMA TECHFEST 2.0",
      organization: "IEEE Computer Society, JNNCE",
      date: "2026",
      badge: "National AI Hackathon",
      category: "Leadership & Operations",
      description: "Coordinated logistics, participant tracks, and technical infrastructure for the National-Level AI Hackathon hosted by JNNCE."
    },
    {
      title: "NASA International Space Apps Challenge Participant",
      organization: "NASA Space Apps",
      date: "2025",
      badge: "Global Hackathon",
      category: "Global Innovation",
      description: "Participated in the prestigious global hackathon tackling Earth and space science challenges using open NASA satellite datasets."
    },
    {
      title: "INSIGHT 2K26 Technical Fest Participant",
      organization: "JNNCE Technical Forum",
      date: "2026",
      badge: "Technical Fest",
      category: "Technical Events",
      description: "Active contributor and participant across coding, debugging, and systems design challenges."
    }
  ],

  certifications: [
    {
      title: "NPTEL Certified Technical Program",
      issuer: "NPTEL / IIT",
      focus: "Computer Science & Engineering Fundamentals",
      credentialUrl: "https://www.linkedin.com/in/chetankumarnk/",
      badge: "National Certification",
      skills: ["Core Computer Science", "Algorithms", "Problem Solving"]
    },
    {
      title: "Deloitte Technology & Data Analytics Program",
      issuer: "Deloitte (Forage)",
      focus: "Enterprise Data Analytics & Business Technology",
      credentialUrl: "https://www.linkedin.com/in/chetankumarnk/",
      badge: "Industry Credential",
      skills: ["Data Analytics", "Business Intelligence", "Problem Formulation"]
    },
    {
      title: "Infosys Springboard Certification",
      issuer: "Infosys Springboard",
      focus: "Software Development & Emerging AI Technologies",
      credentialUrl: "https://www.linkedin.com/in/chetankumarnk/",
      badge: "Industry Program",
      skills: ["Software Engineering", "AI Foundations", "Python"]
    },
    {
      title: "Data Analytics Virtual Internship Certification",
      issuer: "Oasis Infobyte",
      focus: "Data Cleaning, EDA, Sentiment Analysis & Segmentation",
      credentialUrl: "https://www.linkedin.com/in/chetankumarnk/",
      badge: "Verified Internship",
      skills: ["Python Data Science", "Pandas", "Customer Segmentation", "SQL"]
    }
  ],

  growthTimeline: [
    {
      phase: "01",
      year: "2023",
      title: "Academic & Computational Foundations",
      subtitle: "JNNCE — Information Science & Engineering",
      description: "Commenced B.E. studies with strong academic standing (PUC: 92%, SSLC: 91.48%). Mastered core CS fundamentals: Data Structures, OOP (Python, Java), and Computer Networks."
    },
    {
      phase: "02",
      year: "2024",
      title: "AI, Machine Learning & Computer Vision",
      subtitle: "Deep Dive into Applied Intelligence",
      description: "Expanded into deep learning, computer vision (YOLO, OpenCV), and edge computing with Raspberry Pi. Began prototyping assistive technologies."
    },
    {
      phase: "03",
      year: "2025",
      title: "Generative AI, RAG & Community Leadership",
      subtitle: "IEEE Chapter & Global Hackathons",
      description: "Architected RAG systems with LangChain and vector databases. Joined IEEE Computer Society, participated in NASA Space Apps Challenge, and developed VideoMind AI."
    },
    {
      phase: "04",
      year: "2026",
      title: "Grants, Industry Internships & Major Systems",
      subtitle: "NewGen IEDC Grant & HackerRank Crew",
      description: "Secured ₹10,000 NewGen IEDC grant for AID1 wearable, completed Data Analytics Internship at Oasis Infobyte, won 1st Place Ideathon, and developed Smart Robo Nurse."
    },
    {
      phase: "05",
      year: "2027 & Beyond",
      title: "Intelligent Systems Engineering",
      subtitle: "Future Vision & Industry Impact",
      description: "Graduating with high technical rigor, driving forward-thinking AI agentic workflows, edge intelligence, and scalable machine learning software for global industry challenges."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
