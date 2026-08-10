export interface Category {
  slug: string
  name: string
  description: string
  iconName: string
  type: 'internship' | 'volunteer' | 'both'
}

export const CATEGORIES: Category[] = [
  // Internship Categories
  {
    slug: 'software-development',
    name: 'Software Development',
    description: 'Frontend, Full Stack, Mobile, and Backend engineering internships built for aspiring developers.',
    iconName: 'Code',
    type: 'internship'
  },
  {
    slug: 'data-analytics',
    name: 'Data Analytics',
    description: 'SQL, Python, Business Intelligence, and Data Science internship roles to kickstart your data career.',
    iconName: 'BarChart3',
    type: 'internship'
  },
  {
    slug: 'design',
    name: 'UI/UX & Design',
    description: 'Product design, visual UI, and user research roles with modern product teams.',
    iconName: 'Palette',
    type: 'internship'
  },
  {
    slug: 'marketing',
    name: 'Digital Marketing',
    description: 'SEO, content strategy, growth marketing, and social media analytics roles.',
    iconName: 'TrendingUp',
    type: 'internship'
  },
  {
    slug: 'product-management',
    name: 'Product Management',
    description: 'Associate Product Manager and Product Analyst positions focused on user research and roadmap execution.',
    iconName: 'Compass',
    type: 'internship'
  },
  {
    slug: 'human-resources',
    name: 'Human Resources',
    description: 'Talent acquisition, people operations, and employee engagement internships.',
    iconName: 'Users',
    type: 'internship'
  },

  // Volunteer Categories
  {
    slug: 'community-outreach',
    name: 'Community Outreach',
    description: 'Youth empowerment, digital inclusion workshops, and community coordination volunteer opportunities.',
    iconName: 'HeartHandshake',
    type: 'volunteer'
  },
  {
    slug: 'tech-for-good',
    name: 'Tech for Good',
    description: 'Open source contributions, educational software tools, and web accessibility initiatives.',
    iconName: 'Laptop',
    type: 'volunteer'
  },
  {
    slug: 'content-and-media',
    name: 'Content & Media',
    description: 'Graphic design, cause marketing, social storytelling, and educational writing for non-profits.',
    iconName: 'Sparkles',
    type: 'volunteer'
  },
  {
    slug: 'peer-mentorship',
    name: 'Peer Mentorship',
    description: 'Resume reviews, interview coaching, and career support for fellow students.',
    iconName: 'GraduationCap',
    type: 'volunteer'
  }
]
