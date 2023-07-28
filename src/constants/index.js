import {
    backend,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
    python,
    MySQL,
    matlab,
    orii,
    koln3d,
    bloomberg,
    excel,
    imperial,
    stockhub,
    icinvestmentsoc,
    datascience
  } from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  
];

const services = [
  {
    title: "Data Scientist",
    icon: datascience,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Final Year Student",
    icon: imperial,
  },
  {
    title: "Head of Portfolio Management & TMT Sector",
    icon: icinvestmentsoc,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MySQL",
    icon: MySQL,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "MongodB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "MATLAB",
    icon: matlab,
  },
  {
    name: "Bloomberg Terminal",
    icon: bloomberg,
  },
  {
    name: "Excel",
    icon: excel,
  },
];

const experiences = [
  {
    title: "Software Engineer (Summer Intern)",
    company_name: "Orii",
    icon: orii,
    iconBg: "#383E56",
    date: "August 2019 - September 2019",
    points: [
      "Assist in solving hardware faults & software bugs in Python in applying sensors and AI in the smart home and medical field.",
      "Conduct a new project on developing the application of bone conduction onto earphones using OrCAD and Solidworks design for staff trial in a 5-star luxury hotel chain.",
      "Generated 20K HKD Revenue from the project."
    ],
  },
  {
    title: "Data Scientist (Summer Intern)",
    company_name: "KOLN3D",
    icon: koln3d,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Present",
    points: [
      "The software automated the design procedure from 2 weeks to under 2 days, 3 hospitals confirmed collaboration in using the prototype",
      "Design and develop the first version of machine learning Auto Image Modelling Software from scratch targeting Biomedical Engineers and Doctors in Python, the features include:",
      "1. 	Data engineering, data cleaning, web scraping, pre-processing, and converting raw image data into the database",
      "2. 	Constructing 3D interactive model construction from DICOM format CT Scan by DicomToMesh",
      "3. 	Using MONAI to undergo volumetric image segmentation",
      "4. 	3D U-Net CNN model for bone classification and feature detection, and LSTM model for learning the features",
      "5. 	Auto jig for medical surgical operation",
      "6. 	Generative AI on GAN model, comparing in the database for detecting other possible diseases using GPT-3 model",
      "7. 	Software UI design using Figma, HTML, CSS, and JavaScript",
      "8. 	Federal Learning & Averaging for handling sensitive healthcare data"
    ],
  },
  {
    title: "Investment Analyst (Summer Intern)",
    company_name: "Stockhub",
    icon: stockhub,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Present",
    points: [
      "Building financial models on the financial reports with Excel, conducting company valuation with DCF & Comp, and Scenario analysis",
      "Deploy mathematical finance to investigate compelling valuation and hedging models with Python"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Equity Investment Analysis Platform",
    description:
      "Creating a website to perform investment analysis in the financial reports, technical analysis, and macro data analysis. Time series forecasting with LSTM model and Trend Analysis using technical analysis such as William % Ratio, DMI, and Candlestick. Sentiment Analysis using the BERT model to evaluate the financial news and social media to predict market movement",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    info_page: "/Equity_Investment_Analysis_Platform",
  },
  {
    name: "Natural Language Processing Translator System",
    description:
      "Self-Initiated project collaborating with Barefoot Law, developing NLP African language translation system for legal assistance. Increasing lawyer’s processing efficiency from 72 hours to 24 hours and establishing new client database cumulated to 2.5 billion users. Tools: Python, Named Entity Recognition, Multilabel Classification, Transformer models including OPUS-MT, BERT, GPT3 model",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
  
    ],
    image: jobit,
    source_code_link: "https://github.com/kareenamirchandani/Machine-Translation-Winnie",
    info_page: "NLP_Translator_ML",
  },
  {
    name: "Optiver Market Making Challenge",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    info_page: "/Optiver_Market_Making_Challenge",
  },
  {
    name: "Auto Image Processing and Jig System ",
    description:
      " Created a high-frequency trading algorithm in Python that provides market liquidity, pair trading, Index Arbitrage, bid-ask spread management, and risk management, resulting in £240 PnL per hour and 0.23 hourly Sharpe. Ranked 6th in 27 teams.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      }
    ],
    image: tripguide,
    source_code_link: "https://github.com/Jamieho1/Deep_Learning_for_3D_Image_Segmentation",
    info_page: "/Optiver_Market_Making_Challenge",
  },
  {
    name: "Coursera IBM Data Science Professional Certificate",
    description:
      " Credential ID: 4EQQNQTVJZWD, Further enhance the knowledge of data engineering, data visualization, and machine learning models",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      }
    ],
    image: tripguide,
  },
  {
    name: "Cloud Resume",
    description:
      " This resume website",
    tags: [
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "Javascript",
        color: "orange-text-gradient",
      },

    ],
    image: tripguide,
    source_code_link: "https://github.com/Jamieho1/Resume",
    info_page: "/Optiver_Market_Making_Challenge",
  },
];

export { services, technologies, experiences, testimonials, projects };