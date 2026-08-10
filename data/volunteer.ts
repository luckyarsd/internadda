export interface VolunteerRole {
  id: string
  slug: string
  title: string
  organization: string
  orgLogo?: string
  category: string
  categorySlug: string
  location: string
  locationType: 'Remote' | 'Hybrid' | 'On-site'
  commitment: string
  duration: string
  openings: number
  postedDate: string
  description: string
  cause: string
  responsibilities: string[]
  requirements: string[]
  learningOutcomes: string[]
  skills: string[]
}

export const VOLUNTEER_ROLES: VolunteerRole[] = [
  {
    id: 'vol-01',
    slug: 'community-outreach-volunteer',
    title: 'Community Outreach & Youth Coordinator',
    organization: 'Empower India Foundation',
    category: 'Community Outreach',
    categorySlug: 'community-outreach',
    location: 'Remote (India)',
    locationType: 'Remote',
    commitment: '4-6 hours / week',
    duration: '3 Months',
    openings: 8,
    postedDate: '2026-08-01',
    description: 'Empower India Foundation is looking for passionate student volunteers to lead community awareness campaigns and facilitate digital literacy webinars for underserved youth.',
    cause: 'Education & Digital Inclusion',
    responsibilities: [
      'Organize online workshops teaching digital safety and basic computer literacy',
      'Coordinate with regional student ambassadors across Indian colleges',
      'Manage community discussion forums and respond to student inquiries',
      'Collect feedback from workshop participants to improve educational modules'
    ],
    requirements: [
      'Empathetic communicator with strong public speaking skills',
      'Fluency in English and Hindi (regional languages are a plus)',
      'Passion for social impact and educational equity',
      'Minimum commitment of 4 hours per week'
    ],
    learningOutcomes: [
      'Community management and event leadership experience',
      'Official Volunteer Service Certificate & Badge',
      'Letter of Appreciation signed by Foundation Director'
    ],
    skills: ['Community Management', 'Public Speaking', 'Event Coordination', 'Empathy']
  },
  {
    id: 'vol-02',
    slug: 'open-source-technical-contributor',
    title: 'Open Source Technical Contributor & Educator',
    organization: 'OpenCode India Initiative',
    category: 'Tech for Good',
    categorySlug: 'tech-for-good',
    location: 'Remote',
    locationType: 'Remote',
    commitment: '5-8 hours / week',
    duration: 'Flexible',
    openings: 12,
    postedDate: '2026-08-03',
    description: 'Contribute code, documentation, and starter tutorials to open source accessibility software and educational tech tools built for non-profits.',
    cause: 'Open Source & Accessible Tech',
    responsibilities: [
      'Review PRs and resolve GitHub issues in open source educational repositories',
      'Write beginner-friendly code tutorials and documentation guides',
      'Audit web applications for WCAG 2.1 accessibility compliance',
      'Mentor first-time open source contributors in community Discord/Slack'
    ],
    requirements: [
      'Familiarity with Git, GitHub workflow, and Markdown',
      'Experience in JavaScript/TypeScript, Python, or Web Accessibility',
      'Willingness to mentor beginner developers'
    ],
    learningOutcomes: [
      'Public GitHub contribution history on high-impact projects',
      'Mentorship skills and community recognition',
      'Open Source Leadership Certificate'
    ],
    skills: ['Git / GitHub', 'TypeScript', 'Web Accessibility (a11y)', 'Technical Writing']
  },
  {
    id: 'vol-03',
    slug: 'non-profit-digital-strategist',
    title: 'Non-Profit Media & Digital Strategist',
    organization: 'Green Earth Alliance',
    category: 'Content & Media',
    categorySlug: 'content-and-media',
    location: 'Remote (India)',
    locationType: 'Remote',
    commitment: '3-5 hours / week',
    duration: '2 Months',
    openings: 4,
    postedDate: '2026-08-04',
    description: 'Help Green Earth Alliance design impactful infographic campaigns and social media stories advocating for environmental sustainability and climate action.',
    cause: 'Environmental Sustainability',
    responsibilities: [
      'Design graphics and educational carousels for climate awareness campaigns',
      'Draft short, compelling captions and blog summaries on environmental topics',
      'Collaborate with campaign leads to schedule social content publishing',
      'Track engagement metrics to see which topics resonate most'
    ],
    requirements: [
      'Proficiency in Canva or Adobe Creative Suite',
      'Interest in environmental conservation and sustainability',
      'Creative storytelling ability'
    ],
    learningOutcomes: [
      'Portfolio of published cause-marketing campaign graphics',
      'Verified Volunteer Certificate from NGO partner',
      'Direct social impact track record'
    ],
    skills: ['Graphic Design', 'Canva', 'Social Media Strategy', 'Cause Marketing']
  },
  {
    id: 'vol-04',
    slug: 'peer-career-mentor',
    title: 'Peer Student Mentor & Resume Reviewer',
    organization: 'InternAdda Peer Network',
    category: 'Peer Mentorship',
    categorySlug: 'peer-mentorship',
    location: 'Remote',
    locationType: 'Remote',
    commitment: '2-4 hours / week',
    duration: '3 Months',
    openings: 10,
    postedDate: '2026-08-05',
    description: 'Senior students and recent graduates offer 1-on-1 resume feedback and interview prep guidance to junior students starting their career search.',
    cause: 'Youth Employability & Mentorship',
    responsibilities: [
      'Review student resumes and provide constructive line-by-line feedback',
      'Conduct 20-minute mock interviews over video calls',
      'Share career guidance, resource links, and study roadmaps',
      'Participate in monthly peer mentor syncs'
    ],
    requirements: [
      'Prior internship experience or strong academic track record',
      'Supportive, encouraging mindset with attention to detail',
      'Ability to commit 2-4 hours weekly for scheduled reviews'
    ],
    learningOutcomes: [
      'Coaching and leadership skill development',
      'Featured Profile badge on InternAdda Community',
      'Official Mentorship Recognition Certificate'
    ],
    skills: ['Resume Review', 'Interview Prep', 'Mentorship', 'Constructive Feedback']
  }
]
