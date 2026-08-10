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
    slug: 'data-analytics-intern',
    title: 'Data Analytics Intern (Excel & SQL)',
    company: 'QuantEdge Analytics',
    companyLogo: '/logo.jpg',
    category: 'Data Analytics',
    categorySlug: 'data-analytics',
    location: 'Remote (India)',
    locationType: 'Remote',
    duration: '2-3 Months',
    stipend: '₹3,500 / month',
    type: 'Part-time',
    openings: 5,
    postedDate: '2026-08-01',
    deadline: '2026-08-31',
    description: 'Extract insights from raw datasets using Excel formulas, basic SQL, and Power BI dashboards. No prior experience mandatory — we evaluate candidates via a simple, real task, not just a resume.',
    responsibilities: [
      'Clean and format structured raw datasets using Excel formulas and functions',
      'Assist in writing basic SQL queries to aggregate user activity data',
      'Create basic charts and summary reports for weekly team reviews',
      'Learn data visualization best practices with guidance from senior analysts'
    ],
    requirements: [
      'Basic Excel comfort (SUM, VLOOKUP/XLOOKUP, Pivot Tables)',
      'Willingness to learn Power BI and basic SQL fundamentals',
      'Curiosity for numbers and pattern recognition',
      'No prior professional analytics experience mandatory — training provided'
    ],
    perks: [
      'Verified Certificate of Completion & Letter of Recommendation',
      '1-on-1 mentorship from Senior Data Analysts',
      '100% remote work with flexible hours',
      'Opportunity for stipend increase based on project output'
    ],
    skills: ['Excel Basics', 'Basic SQL', 'Power BI Fundamentals', 'Data Cleaning']
  },
  {
    id: 'int-02',
    slug: 'power-bi-dashboard-intern',
    title: 'Power BI & Dashboard Development Intern',
    company: 'Apex Insights',
    companyLogo: '/logo.jpg',
    category: 'Data Analytics',
    categorySlug: 'data-analytics',
    location: 'Remote (India)',
    locationType: 'Remote',
    duration: '3 Months',
    stipend: '₹4,000 / month',
    type: 'Part-time',
    openings: 4,
    postedDate: '2026-08-02',
    deadline: '2026-09-02',
    description: 'Transform raw spreadsheet data into clear interactive dashboards. No prior BI experience required — hands-on training and starter templates provided. Evaluated via a short, practical task.',
    responsibilities: [
      'Import spreadsheet data into Power BI and set up data models',
      'Design clean, interactive visuals (bar charts, KPIs, trend lines)',
      'Document dashboard metrics and update weekly data sources',
      'Participate in dashboard review calls with client leads'
    ],
    requirements: [
      'Basic familiarity with MS Excel spreadsheets',
      'No prior Power BI experience required — training provided',
      'Keen eye for clean layout and clear data presentation',
      'Enthusiasm to build real portfolio dashboards'
    ],
    perks: [
      'Official Power BI Portfolio Certificate',
      'Direct guidance from Lead BI Architect',
      'Flexible schedule (10-15 hrs/week)',
      'Direct intro to hiring partners upon successful completion'
    ],
    skills: ['Power BI', 'Excel Spreadsheets', 'Dashboard Design', 'Data Reporting']
  },
  {
    id: 'int-03',
    slug: 'ms-office-business-operations-intern',
    title: 'MS Office & Business Operations Intern',
    company: 'Vanguard Operations',
    companyLogo: '/logo.jpg',
    category: 'Business Operations',
    categorySlug: 'operations',
    location: 'Remote (India)',
    locationType: 'Remote',
    duration: '2 Months',
    stipend: '₹2,500 / month',
    type: 'Part-time',
    openings: 6,
    postedDate: '2026-08-03',
    deadline: '2026-08-30',
    description: 'Support operational workflows by organizing documents in MS Word, managing records in Excel, and preparing slide decks in PowerPoint. No prior experience mandatory — evaluated via a real task.',
    responsibilities: [
      'Organize and update internal spreadsheets with accurate business records',
      'Format business proposals and reports using MS Word templates',
      'Draft clean PowerPoint presentation slides for team updates',
      'Help coordinate communication across project teams'
    ],
    requirements: [
      'Comfortable with MS Office / Google Workspace basics (Excel, Word, PowerPoint)',
      'Good written communication in English',
      'Strong organizational skills and attention to detail',
      'No prior office experience mandatory'
    ],
    perks: [
      'Certificate of Internship Completion',
      'Flexible remote schedule (10 hrs/week)',
      'Letter of Recommendation for top performers',
      '100% free application and direct onboarding'
    ],
    skills: ['MS Excel', 'MS PowerPoint', 'MS Word', 'Data Entry', 'Communication']
  },
  {
    id: 'int-04',
    slug: 'creative-ad-design-intern',
    title: 'Creative & Ad Design Intern (Canva / Photoshop)',
    company: 'Krypton Studio',
    companyLogo: '/logo.jpg',
    category: 'UI/UX Design',
    categorySlug: 'design',
    location: 'Remote (India)',
    locationType: 'Remote',
    duration: '3 Months',
    stipend: '₹3,000 / month',
    type: 'Part-time',
    openings: 3,
    postedDate: '2026-08-04',
    deadline: '2026-09-05',
    description: 'Design catchy social media ad creatives, banners, and marketing visuals. Minimal skill needed — Canva familiarity is enough! No prior experience mandatory, evaluated via a short design task.',
    responsibilities: [
      'Create social media graphic posts and ad banners using Canva or Photoshop',
      'Adapt visual templates across different dimensions (Instagram, LinkedIn, Web)',
      'Collaborate with marketing leads to brainstorm visual angles',
      'Maintain brand visual consistency across graphics'
    ],
    requirements: [
      'Creative eye and visual design interest',
      'Basic familiarity with Canva (or Photoshop/Figma)',
      'Willingness to learn ad creative design concepts',
      'No professional design background required — portfolio task provided'
    ],
    perks: [
      'Design Portfolio Certification',
      'Feedback from Senior Creative Directors',
      '100% remote workspace with flexible project deadlines',
      'Real ad campaign performance metrics to put on resume'
    ],
    skills: ['Canva', 'Basic Photoshop', 'Ad Graphic Design', 'Visual Layout', 'Social Media Creatives']
  },
  {
    id: 'int-05',
    slug: 'social-media-marketing-intern',
    title: 'Social Media Marketing Intern',
    company: 'ScaleX Digital',
    companyLogo: '/logo.jpg',
    category: 'Digital Marketing',
    categorySlug: 'marketing',
    location: 'Remote (India)',
    locationType: 'Remote',
    duration: '3 Months',
    stipend: '₹5,000 / month',
    type: 'Part-time',
    openings: 4,
    postedDate: '2026-08-05',
    deadline: '2026-09-01',
    description: 'Plan content calendars, draft post captions, schedule social posts, and track basic engagement analytics. No prior experience mandatory — evaluated via a real task, not just a resume.',
    responsibilities: [
      'Draft weekly social media post captions for LinkedIn, Instagram, and Twitter',
      'Schedule content posts using social management tools',
      'Track post reach, impressions, and engagement metrics',
      'Engage with audience comments and direct messages'
    ],
    requirements: [
      'Active social media user with good content sense',
      'Strong written English and catchy copywriting skills',
      'Basic curiosity about digital marketing funnels',
      'No prior agency experience mandatory — short assignment provided'
    ],
    perks: [
      'Certificate of Completion & LinkedIn Recommendation',
      'Direct mentorship from Growth Lead',
      'Stipend + performance bonuses for top campaigns',
      'Flexible remote schedule'
    ],
    skills: ['Social Media Copywriting', 'Instagram Marketing', 'LinkedIn Content', 'Basic Analytics', 'Canva']
  }
]
