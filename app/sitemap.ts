import { MetadataRoute } from 'next'
import { INTERNSHIPS } from '@/data/internships'
import { VOLUNTEER_ROLES } from '@/data/volunteer'
import { CATEGORIES } from '@/data/categories'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://internadda.com'

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/internships`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/volunteer`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms-of-service`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/disclaimer`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]

  const internshipUrls: MetadataRoute.Sitemap = INTERNSHIPS.map((role) => ({
    url: `${baseUrl}/internships/${role.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const volunteerUrls: MetadataRoute.Sitemap = VOLUNTEER_ROLES.map((role) => ({
    url: `${baseUrl}/volunteer/${role.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const categoryUrls: MetadataRoute.Sitemap = CATEGORIES.map((cat) => {
    const prefix = cat.type === 'volunteer' ? 'volunteer' : 'internships'
    return {
      url: `${baseUrl}/${prefix}/category/${cat.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    }
  })

  return [...staticPages, ...internshipUrls, ...volunteerUrls, ...categoryUrls]
}
