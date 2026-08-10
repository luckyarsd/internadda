export interface Internship {
  id: string
  slug: string
  title: string
  company: string
  companyLogo?: string
  category: string
  categorySlug: string
  location: string
  locationType: 'Remote' | 'Hybrid' | 'On-site'
  duration: string
  stipend: string
  type: 'Full-time' | 'Part-time'
  openings: number
  postedDate: string
  deadline: string
  description: string
  responsibilities: string[]
  requirements: string[]
  perks: string[]
  skills: string[]
}

export const INTERNSHIPS: Internship[] = [
  {
    id: 'int-01',
    slug: 'software-engineering-intern',
    title: 'Software Engineering Intern (Frontend / Full Stack)',
    company: 'Apex Labs',
    category: 'Software Development',
    categorySlug: 'software-development',
    location: 'Remote (India)',
    locationType: 'Remote',
    duration: '3 Months',
    stipend: '₹18,000 / month',
    type: 'Full-time',
    openings: 4,
    postedDate: '2026-08-01',
    deadline: '2026-08-30',
    description: 'Apex Labs is seeking driven Software Engineering Interns to help build next-generation web applications using Next.js, React, TypeScript, and modern CSS frameworks.',
    responsibilities: [
      'Build responsive, accessible user interface components using React and TypeScript',
      'Collaborate with product designers to implement clean UI components matching design tokens',
      'Optimize web application page speed, core web vitals, and asset loading',
      'Participate in daily standups, code reviews, and architectural discussions'
    ],
    requirements: [
      'Strong fundamentals in JavaScript (ES6+), HTML5, and CSS3',
      'Familiarity with React, Next.js, and Git version control',
      'Understanding of REST APIs and async data fetching',
      'Currently pursuing or recent graduate in CS, IT, or related technical disciplines'
    ],
    perks: [
      'Certificate of Completion & Letter of Recommendation',
      'Mentorship from Senior Staff Engineers',
      'Flexible working hours & 100% remote workspace',
      'PPO (Pre-Placement Offer) potential based on performance'
    ],
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Git']
  },
  {
    id: 'int-02',
    slug: 'data-analyst-intern',
    title: 'Data Analyst & Insights Intern',
    company: 'QuantEdge Analytics',
    category: 'Data Analytics',
    categorySlug: 'data-analytics',
    location: 'Bangalore / Hybrid',
    locationType: 'Hybrid',
    duration: '6 Months',
    stipend: '₹22,000 / month',
    type: 'Full-time',
    openings: 3,
    postedDate: '2026-08-03',
    deadline: '2026-08-28',
    description: 'Work with cross-functional product and growth teams at QuantEdge to extract, clean, and visualize user analytics data to drive business decisions.',
    responsibilities: [
      'Extract data using SQL queries and clean structured/unstructured datasets',
      'Build automated analytics dashboards using Python (Pandas/Seaborn) or Power BI',
      'Perform cohort analysis and funnel conversion metrics for digital products',
      'Present findings and actionable insights to senior leadership'
    ],
    requirements: [
      'Proficiency in SQL and Python data analysis libraries (Pandas, NumPy)',
      'Basic understanding of statistics, probability, and hypothesis testing',
      'Familiarity with BI tools (PowerBI, Tableau, or Metabase)',
      'Analytical mindset with attention to detail'
    ],
    perks: [
      'Industry-recognized Data Analytics Certification',
      'Direct exposure to production datasets',
      'Hybrid office perks in HSR Layout, Bangalore'
    ],
    skills: ['SQL', 'Python', 'Pandas', 'Power BI', 'Data Visualization']
  },
  {
    id: 'int-03',
    slug: 'ui-ux-design-intern',
    title: 'UI/UX & Product Design Intern',
    company: 'Krypton Design Studio',
    category: 'UI/UX Design',
    categorySlug: 'design',
    location: 'Remote (India)',
    locationType: 'Remote',
    duration: '3 Months',
    stipend: '₹15,000 / month',
    type: 'Part-time',
    openings: 2,
    postedDate: '2026-08-05',
    deadline: '2026-09-05',
    description: 'Join Krypton Design Studio to design sleek, modern visual interfaces, wireframes, and design systems for client web & mobile products.',
    responsibilities: [
      'Create high-fidelity wireframes, interactive prototypes, and visual designs in Figma',
      'Conduct user research and usability testing sessions with user cohorts',
      'Maintain component libraries and design tokens for engineering handoff',
      'Iterate designs based on feedback from product managers and engineers'
    ],
    requirements: [
      'Proficiency with Figma, Auto Layout, and Component Variants',
      'Portfolio showcasing 2-3 UI/UX case studies or web designs',
      'Good sense of visual hierarchy, typography, colors, and micro-interactions',
      'Strong communication skills for presenting design rationale'
    ],
    perks: [
      'Design portfolio critique from Principal UX Designers',
      'Flexible working schedule',
      'Work on live production apps'
    ],
    skills: ['Figma', 'User Research', 'Wireframing', 'Prototyping', 'Design Systems']
  },
  {
    id: 'int-04',
    slug: 'growth-marketing-intern',
    title: 'Growth & Performance Marketing Intern',
    company: 'ScaleX Media',
    category: 'Digital Marketing',
    categorySlug: 'marketing',
    location: 'Delhi NCR / On-site',
    locationType: 'On-site',
    duration: '3 Months',
    stipend: '₹16,000 / month',
    type: 'Full-time',
    openings: 5,
    postedDate: '2026-08-02',
    deadline: '2026-08-31',
    description: 'ScaleX Media is looking for an energetic Growth Marketing Intern to plan and execute SEO campaigns, organic social content, and user acquisition funnels.',
    responsibilities: [
      'Perform SEO keyword research and optimize website landing page metadata',
      'Draft copy for email newsletters, blog articles, and social posts',
      'Track campaign performance using Google Analytics and Search Console',
      'Assist in executing social media strategy across LinkedIn, Instagram, and X'
    ],
    requirements: [
      'Basic knowledge of Digital Marketing fundamentals and SEO principles',
      'Strong written English communication skills',
      'Familiarity with Google Analytics, Canva, or Ahrefs/Semrush is a plus',
      'Degree in Marketing, Communications, Business, or related fields'
    ],
    perks: [
      'Hands-on experience with ad budgets and growth tools',
      'Stipend + performance bonuses',
      'Certificate and LinkedIn recommendation'
    ],
    skills: ['SEO', 'Content Strategy', 'Google Analytics', 'Social Media', 'Copywriting']
  },
  {
    id: 'int-05',
    slug: 'product-management-intern',
    title: 'Associate Product Manager Intern',
    company: 'Vanguard Systems',
    category: 'Product Management',
    categorySlug: 'product-management',
    location: 'Remote (India)',
    locationType: 'Remote',
    duration: '4 Months',
    stipend: '₹20,000 / month',
    type: 'Full-time',
    openings: 2,
    postedDate: '2026-08-04',
    deadline: '2026-09-01',
    description: 'Work alongside senior product managers to define product requirements, translate customer feedback into user stories, and track feature execution.',
    responsibilities: [
      'Write detailed Product Requirement Documents (PRDs) and user stories in Notion/Jira',
      'Gather and synthesize qualitative user feedback and quantitative product analytics',
      'Coordinate between engineering, design, and business teams during sprint releases',
      'Analyze competitor products and industry benchmarks'
    ],
    requirements: [
      'Strong problem-solving ability and structured analytical thinking',
      'Excellent written and verbal communication skills',
      'Prior exposure to product management concepts or software development',
      'Self-driven attitude with ability to manage timelines'
    ],
    perks: [
      '1-on-1 mentorship from VP of Product',
      'Certificate of Excellence',
      'High conversion rate to full-time APM role'
    ],
    skills: ['PRD Writing', 'User Stories', 'Agile/Scrum', 'Product Analytics', 'Market Research']
  },
  {
    id: 'int-06',
    slug: 'hr-talent-acquisition-intern',
    title: 'HR & People Operations Intern',
    company: 'Nexus Global',
    category: 'Human Resources',
    categorySlug: 'human-resources',
    location: 'Mumbai / Hybrid',
    locationType: 'Hybrid',
    duration: '3 Months',
    stipend: '₹14,000 / month',
    type: 'Full-time',
    openings: 3,
    postedDate: '2026-08-06',
    deadline: '2026-09-10',
    description: 'Assist the People Operations team in candidate sourcing, interview coordination, onboarding experiences, and employee engagement initiatives.',
    responsibilities: [
      'Screen candidate resumes and conduct preliminary screening calls',
      'Schedule interviews with technical leads and hiring managers',
      'Help organize virtual onboarding sessions and company cultural events',
      'Maintain candidate databases and Applicant Tracking System (ATS) entries'
    ],
    requirements: [
      'Strong interpersonal and relationship-building skills',
      'Organized mindset with ability to handle multiple schedules',
      'Pursuing MBA/PGDM in HR or Bachelor degree in Psychology/Management',
      'Proficiency in MS Office / Google Workspace tools'
    ],
    perks: [
      'Exposure to corporate HR operations',
      'Official Certificate of Internship',
      'Flexible hybrid schedule'
    ],
    skills: ['Talent Sourcing', 'Interview Scheduling', 'ATS Management', 'Employee Engagement']
  }
]
