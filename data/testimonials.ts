export interface Testimonial {
  id: string
  name: string
  role: string
  organization: string
  quote: string
  avatar: string
  linkedInUrl?: string
  type: 'internship' | 'volunteer'
  rating: number
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Ananya Sharma',
    role: 'Data Analytics Intern',
    organization: 'QuantEdge Analytics',
    quote: 'Applying through InternAdda was seamless and 100% transparent. I landed a Data Analytics internship where I learned Power BI from scratch on real project data!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    linkedInUrl: 'https://linkedin.com',
    type: 'internship',
    rating: 5,
  },
  {
    id: 't-2',
    name: 'Rohan Verma',
    role: 'Tech for Good Volunteer',
    organization: 'Digital Empowerment India',
    quote: 'Building web components for a non-profit NGO allowed me to work directly with their founder. The verified volunteer certificate helped me stand out in my campus placements.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    linkedInUrl: 'https://linkedin.com',
    type: 'volunteer',
    rating: 5,
  },
  {
    id: 't-3',
    name: 'Priya Nair',
    role: 'Creative & Ad Design Intern',
    organization: 'ScaleX Media',
    quote: 'Zero application fees and a super friendly evaluation task. I went from knowing Canva basics to creating live social media ad campaigns for startups.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    linkedInUrl: 'https://linkedin.com',
    type: 'internship',
    rating: 5,
  },
  {
    id: 't-4',
    name: 'Aditya Patel',
    role: 'Community Lead Volunteer',
    organization: 'GreenEarth India',
    quote: 'The direct founder connection and official letter of recommendation made my volunteer stint incredible. Highly recommend InternAdda for genuine volunteer roles!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    linkedInUrl: 'https://linkedin.com',
    type: 'volunteer',
    rating: 5,
  },
]
